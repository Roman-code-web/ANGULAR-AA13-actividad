import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css']
})
export class Formulario3Component {
  titulo="Actividad 3";
  subtitulo="Pipe JSON";
  lista=[{
    'Apellido':'Roman Gutierrez',
    'Casado':false,
    'Nombre':'Alondra selene',
    'Direccion':'ATE 502',
    'Telefono':'960231261',
  },
  {
    'Apellido':'flores Rosales',
    'Casado':false,
    'Nombre':'Ariana',
    'Direccion':'ATE 502',
    'Telefono':'960555333',
  }
]
}
