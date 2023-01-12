import { Component } from '@angular/core';
import {Client} from "../Types/client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TESTTILE';
  client: Client= {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    login: '',
    phone: ''
  }

  clientChange(e: Client) {
    this.client = e;
  }
}
