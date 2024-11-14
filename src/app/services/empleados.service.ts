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
    const url = environment.urlEmpleados + endpoint;

    return axios.post(url, json, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log(response.data.response)
      return response.data.response;
    })
    .catch(error => {
      console.error('Error en el login:', error);
    });
  }
}
