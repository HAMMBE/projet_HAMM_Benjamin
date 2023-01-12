import { Injectable } from '@angular/core';
import {Client} from "../../Types/client";
import{environment} from "../environement/env";
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient : HttpClient) { }

  public postClient(client: Client) {
    console.log(client);
    return this.httpClient.post("https://tp-hamm-benjamin.onrender.com/api/register", {client: client});
  }

  public getClient(id: string) {
    return {
      title: '',
      valid: true,
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      login: '',
      phone: ''
    }
  }

  public postlogin(login: string, password: string) : Observable<any> {
    console.log(login + " " + password);
    return this.httpClient.post("https://tp-hamm-benjamin.onrender.com/api/login", {login: login, password: password});
  }

}
