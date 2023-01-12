import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FormClientComponent} from "../form-client/form-client.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ClientService} from "../service/client.service";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "../login/login.component";



const routes: Routes = [
  { path: "register", component: FormClientComponent },
  { path: "login", component: LoginComponent },
];
@NgModule({
  declarations: [
    FormClientComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientModule { }
