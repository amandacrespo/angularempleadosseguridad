import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  @ViewChild('username') username!: ElementRef;
  @ViewChild('password') password!: ElementRef;

  constructor(
    public _service: EmpleadosService, 
    public _router: Router
  ){}

  ngOnInit(){
    if(localStorage.getItem('bearer_token') !== null){
      this._router.navigate(['/']);
    }
  }

  login(): void {
    this._service.getToken(
      this.username.nativeElement.value, 
      this.password.nativeElement.value
    )
    .then(response => {
      if(response !== undefined){
        localStorage.setItem('bearer_token', 'Bearer ' + response);
        this._router.navigate(['/']);
      }
    });
  }
}
