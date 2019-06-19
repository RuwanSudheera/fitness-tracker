import { Subject } from 'rxjs';
import {Exercise} from './exercise.model';
import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable()
export class TrainingService {
  exerciseChanged = new Subject<Exercise>();
  exercisesChanged = new Subject<Exercise[]>();
  finishedExercisesChanged = new Subject<Exercise[]>();
  private availabeExercises: Exercise[] = [];
  private runningExercise: Exercise;

  private finishedExercises: Exercise[] = [];

  constructor( private db: AngularFirestore ){}

  fetchAvailableExercises(){
    this.db
      .collection('availableExercises')
      .snapshotChanges()
      .map(docArray => {
        docArray.map(doc => {
          return {
            id: doc.payload.doc.id,
            ...doc.payload.doc.data()
          };
        });
      })
      .subscribe((exercises: Exercise[]) => {
        this.availabeExercises = exercises;
        this.exercisesChanged.next([...this.availableExercises]);
      });
}

  startExercise(selectedId: string) {
    this.runningExercise = this.availabeExercises.find(
      ex => ex.id === selectedId
    );
    this.exerciseChanged.next({...this.runningExercise});
  }

  completeExercise() {
    this.addDataToDatabase({
      ...this.runningExercise,
      date: new Date(),
      state: 'completes'
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }
  cancelExercise(progress: number){
    this.addDataToDatabase({
      ...this.runningExercise,
      date: new Date(),
      duration: this.runningExercise.duration * ( progress / 100 ),
      calories: this.runningExercise.calories * ( progress / 100 ),
      state: 'cancelled'
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  getRunningExercise() {
    return {...this.runningExercise };
  }

  fetchCompletedOrCancelledExercises() {
    this.db.collection('finishedExercises').valueChanges().subscribe((exercises: Exercise[]) => {
      this.finishedExercisesChanged.next(exercises);
    });
  }

  private addDataToDatabase(exercise): Exercise {
    this.db.collection('finishesExercises').add(exercise);
  }
}
