import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatInputModule, FlexLayoutModule],
  exports: [MatButtonModule, MatIconModule, MatInputModule, FlexLayoutModule]
})
export class MaterialModule{}
