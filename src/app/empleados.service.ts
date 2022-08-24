import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";


@Injectable()
export class EmpleadosService{

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService){}


    empleados:Empleado[]=[
        new Empleado('Juan', 'Perez', 'presidente', 500000),
        new Empleado('Juana', 'Pessolano', 'asistente', 20000),
        new Empleado('Angela', 'Arias', 'vice-presidente', 300000),
        new Empleado('Javier', 'Paz', 'vocero', 55000),
  
  
    ];


    agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("Persona a agregar " + "\n" + empleado.nombre +  empleado.apellido + "\n" + "Cargo: " + empleado.cargo + "\n" + "Salario " + empleado.salario);
        this.empleados.push(empleado);
    }

    buscarEmpleado(indice:number){
        let empleado:Empleado=this.empleados[indice];
        return empleado;
    }

    actualizarEmpleado(indice:number, empleado:Empleado){
       let empleadoModificado=this.empleados[indice];
       empleadoModificado.nombre=empleado.nombre;
       empleadoModificado.apellido=empleado.apellido;
       empleadoModificado.cargo=empleado.cargo;
       empleadoModificado.salario=empleado.salario; 
    }

    eliminarEmpleado(indice:number){

        this.empleados.splice(indice,1);
    }
}