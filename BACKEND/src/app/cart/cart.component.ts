import { Component, OnInit } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {CartState} from "../../shared/states/cart-state";
import {Observable} from "rxjs";
import {Product} from "../../Types/product";
import {AddProduct, DeleteProduct} from "../../shared/actions/cart-action";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart$ : Observable<Product[]>;
  constructor(private store : Store) {
    this.cart$ = this.store.select(state => state.cart.products);
  }



  ngOnInit() {
  }


  deleteFromCart(product: Product) : void {
    this.store.dispatch(new DeleteProduct(product));
  }
}
