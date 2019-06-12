import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatTabsModule,
  MatCardModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatProgressSpinnerModule],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatProgressSpinnerModule]
})
export class MaterialModule{}
