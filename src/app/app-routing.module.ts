import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialFormComponent } from './material-form/material-form.component';
import { ShowDataComponent } from './show-data/show-data.component';


const routes: Routes = [
  { path: '', component: MaterialFormComponent },
  { path: 'show-data', component: ShowDataComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
