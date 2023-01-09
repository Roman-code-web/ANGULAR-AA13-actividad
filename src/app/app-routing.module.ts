import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Actividad1Component } from './pages/actividad1/actividad1.component';
import { Actividad2Component } from './pages/actividad2/actividad2.component';
import { Actividad3Component } from './pages/actividad3/actividad3.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"actividad1", component:Actividad1Component},
  {path:"actividad2", component:Actividad2Component},
  {path:"actividad3", component:Actividad3Component},
  {path:"**" , pathMatch:"full", redirectTo:"" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
