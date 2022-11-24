import { Component, OnInit } from '@angular/core';
import {Select} from "@ngxs/store";
import {CartState} from "../../shared/states/cart-state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Select(CartState.getNbProductsInCart) nb$!: Observable<number>;
  ngOnInit(): void {
  }

}
