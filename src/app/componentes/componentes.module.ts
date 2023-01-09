import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Formulario1Component } from './formulario1/formulario1.component';
import { FormsModule } from '@angular/forms';
import { Formulario2Component } from './formulario2/formulario2.component';
import { Formulario3Component } from './formulario3/formulario3.component';



@NgModule({
  declarations: [
    Formulario1Component,
    Formulario2Component,
    Formulario3Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],exports:[
    Formulario1Component,
    Formulario2Component,
    Formulario3Component
  ]
})
export class ComponentesModule { }
