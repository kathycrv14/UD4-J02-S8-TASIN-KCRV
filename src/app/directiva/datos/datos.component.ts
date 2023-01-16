import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  nombre: string = "";
  apellido: string = "";
  edad: string = "";
  personas: any[] = [];

  Validar(nombre:string, apellido:string, edad:string){
    this.personas.push({
      nombre: nombre,
      apellido: apellido,
      edad: edad,
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
