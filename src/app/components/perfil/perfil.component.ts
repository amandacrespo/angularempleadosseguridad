import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../Models/Empleado';
import { EmpleadosService } from '../../services/empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {

  public empleado!: Empleado;

  constructor(public _service: EmpleadosService, public _router: Router){}

  ngOnInit(): void {
    if(localStorage.getItem('bearer_token') === null){
      this._router.navigate(['/login']);
    } else {
      this._service.getPerfil()
      .then(response => {
        this.empleado = response;
      })
    }
  }
  
}
