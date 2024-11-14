import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(public _router: Router){}

  get isLogin(): boolean{
    return localStorage.getItem('bearer_token') !== null;
  }

  logout(){
    localStorage.removeItem('bearer_token');
    this._router.navigate(['/login']);
  }
}
