import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../Models/Empleado';
import { Router } from '@angular/router';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-subordinados',
  templateUrl: './subordinados.component.html',
  styleUrl: './subordinados.component.css'
})
export class SubordinadosComponent implements OnInit{

  public subordinados !: Empleado[];

  constructor(public _service: EmpleadosService, public _router: Router){}

  ngOnInit(): void {
    if(localStorage.getItem('bearer_token') === null){
      this._router.navigate(['/login']);
    } else {
      this._service.getSubordinados()
      .then(response => {
          this.subordinados = response;
      })
    }
  }


}
