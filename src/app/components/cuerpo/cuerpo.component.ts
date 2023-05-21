import { Component } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
  
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      cedula: [''],
      nombre: [''],
      apellido: [''],
      fecha:['']
      })
    };
  cedula = "";
  nombre = "";
  apellido = "";
  fecha = "";
  listPersona: Persona[] = [];
  form: FormGroup;
  ngOnInit(): void {

  }
  agregarPersona():void {
    const persona: Persona = {
      cedula: this.form.value.cedula,
      nombre:this.form.value.nombre,
      apellido:this.form.value.apellido,
      fecha:this.form.value.fecha,
      
    }
    this.form.reset();

    this.listPersona.push(persona);

    this.cedula='';
    this.nombre='';
    this.apellido='';
    this.fecha='';
  }

  eliminarPersona(indice:number):void{
    this.listPersona.splice(indice,1);

  }

 
}
