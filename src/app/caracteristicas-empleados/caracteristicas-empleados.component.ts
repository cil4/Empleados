import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleados',
  templateUrl: './caracteristicas-empleados.component.html',
  styleUrls: ['./caracteristicas-empleados.component.css']
})
export class CaracteristicasEmpleadosComponent implements OnInit {
  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  //constructor(private miServicio:ServicioEmpleadosService) { }

  ngOnInit(): void {
  }


  agregaCaracteristicas(value: string) {
    //this.miServicio.muestraMensaje(value)
    this.caracteristicasEmpleados.emit(value);
    
  }
}
