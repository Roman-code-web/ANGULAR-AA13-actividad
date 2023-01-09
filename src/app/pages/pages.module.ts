import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Actividad1Component } from './actividad1/actividad1.component';
import { Actividad2Component } from './actividad2/actividad2.component';
import { Actividad3Component } from './actividad3/actividad3.component';
import { FormsModule } from '@angular/forms';
import { ComponentesModule } from '../componentes/componentes.module';



@NgModule({
  declarations: [
    HomeComponent,
    Actividad1Component,
    Actividad2Component,
    Actividad3Component
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ]
})
export class PagesModule { }
