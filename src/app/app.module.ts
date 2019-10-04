import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { MaterialFormComponent } from './material-form/material-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShowDataComponent } from './show-data/show-data.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialFormComponent,
    ShowDataComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
