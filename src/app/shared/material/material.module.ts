import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule,
  MatAutocompleteModule,
  MatToolbarModule,
  MatTableModule
} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    MatTableModule,
    MatGridListModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class MaterialModule { }
