import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from "../../Types/product";
import {Observable, of} from "rxjs";
import { map } from 'rxjs/internal/operators/map';
import {Store} from "@ngxs/store";
import {AddProduct} from "../../shared/actions/cart-action";

@Component({
  selector: 'app-show-catalogue',
  templateUrl: './show-catalogue.component.html',
  styleUrls: ['./show-catalogue.component.css']
})
export class ShowCatalogueComponent implements OnInit {

  constructor(private productService : ProductService, private store : Store) { }

  productList$: Observable<Product[]> | undefined;


  filter : string = "";
  ngOnInit(): void {
    this.productList$ = this.productService.getProducts();
  }


  getFilteredProducts() : void {
    if (this.filter == "") {
      this.productList$ = this.productService.getProducts();
    }
    else {
      this.productList$ = this.productService.getProducts().pipe(
        map((products: Product[]) => products.filter((product: Product) => product.name.includes(this.filter)))
      );
    }
  }

  addToCart(product: Product) : void {
    this.store.dispatch(new AddProduct(product));
  }
}
