import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Client} from "../../Types/client";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../service/client.service";
@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

  formClient: FormGroup;
  e: Client = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    login: '',
    phone: ''
  };
  constructor(private formBuilder: FormBuilder, private ClientService: ClientService) {
    this.formClient = this.formBuilder.group({
      firstname: new FormControl('',[
        Validators.required,
        Validators.pattern("^[A-Za-z\-]{2,20}$")
      ]),
      lastname: new FormControl('',[
        Validators.required,
        Validators.pattern("^[A-Za-z\-]{2,20}$")
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")
      ]),
      login: new FormControl('',[
        Validators.required,
        Validators.pattern("^[A-Za-z0-9]{8,20}$")
      ]),
      phone: new FormControl('',[
        Validators.required,
        Validators.pattern("^[0-9]{10}$")
      ])

    });
  }

  ngOnInit(): void {
  }

  ngOnDestory(): void {

  }

  ngOnChanges(): void {

  }

  click() {
    const clientData: Client = {
      firstname: this.formClient.get('firstname')?.value,
      lastname: this.formClient.get('lastname')?.value,
      email: this.formClient.get('email')?.value,
      password: this.formClient.get('password')?.value,
      login: this.formClient.get('login')?.value,
      phone: this.formClient.get('phone')?.value
    };

    this.ClientService.postClient(clientData).subscribe(
      //log the response
      data => console.log(data),
    );
  }
}
