import { Injectable } from '@angular/core';
import axios from "axios";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor() { }

  getToken(username: string, password: number): Promise<any> {
    const endpoint = 'auth/login';
    const json = { 
      'username': username,
      'password': password 
    };
    const headers = {
      'Content-Type': 'application/json'
    }
    const url = environment.urlEmpleados + endpoint;

    return new Promise((resolve)=>{
      axios.post(url, json, {headers: headers})
      .then(response => {
        resolve(response.data.response);
      })
    })
  }

  getPerfil(): Promise<any> {
    const endpoint = 'api/empleados/perfilempleado';
    const url = environment.urlEmpleados + endpoint;
    const headers = {
      'Authorization': localStorage.getItem('bearer_token'),
    };

    return new Promise((resolve)=>{
      axios.get(url, { headers: headers })
      .then(response => {
        resolve(response.data);
      })
    })
  }

  getSubordinados(): Promise<any>{
    return new Promise((resolve)=>{
      const endpoint = 'api/empleados/subordinados';
      const url = environment.urlEmpleados + endpoint;
      const headers = {
        'Authorization': localStorage.getItem('bearer_token'),
      };

      axios.get(url, { headers: headers })
      .then(response => {
          resolve(response.data);
      })
    })
  }
}
