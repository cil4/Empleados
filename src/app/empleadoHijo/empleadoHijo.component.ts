import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleadoHijo',
  templateUrl: './empleadoHijo.component.html',
  styleUrls: ['./empleadoHijo.component.css']
})
export class EmpleadoHijoComponent implements OnInit {


    @Input()empleadoDeLista:Empleado;

    @Input() indice:number;

  constructor() { }

  ngOnInit() {
  }

  empleados:Empleado[]=[
    new Empleado('Juan', 'Perez', 'presidente', 500000),
    new Empleado('Juana', 'Pessolano', 'asistente', 20000),
    new Empleado('Angela', 'Arias', 'vice-presidente', 300000),
    new Empleado('Javier', 'Paz', 'vocero', 55000),


];


agregarEmpleado(){
  let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
  this.empleados.push(miEmpleado);


}

cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;

arrayCaracteristicas = [''];

agregarCaracteristica(nuevaCaracteristica: string) {
  this.arrayCaracteristicas.push(nuevaCaracteristica);
}

}
