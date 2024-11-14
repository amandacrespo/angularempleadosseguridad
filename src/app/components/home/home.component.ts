import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(public _router: Router){}

  ngOnInit(){
    if(localStorage.getItem('bearer_token') === null){
      this._router.navigate(['/login']);
    }
  }
}
