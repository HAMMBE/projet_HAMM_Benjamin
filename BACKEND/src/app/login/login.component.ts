import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ClientService} from "../service/client.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private ClientService: ClientService) { }

  ngOnInit(): void {
  }

  submit() {
    this.ClientService.postlogin(this.loginForm.value.login, this.loginForm.value.password).subscribe(
      //log the response
      data => console.log(data),
    );
  }

}
