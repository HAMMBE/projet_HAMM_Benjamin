import { Injectable } from '@angular/core';
import {Product} from "../../Types/product";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environement/env";
import {Observable} from "rxjs";
import {map} from "rxjs/internal/operators/map";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  env = environment;
  public getProducts() : Observable<any>{
    return this.httpClient.get("https://tp-hamm-benjamin.onrender.com/api/catalogue");
  }

  public getProduct(id: number) : Observable<any> {
    return this.httpClient.get("https://tp-hamm-benjamin.onrender.com/api/catalogue/" + id);
  }

}
