import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {ProductService} from "../service/product.service";
import {Observable} from "rxjs";
import {Product} from "../../Types/product";
import {map} from "rxjs/internal/operators/map";
import {AddProduct} from "../../shared/actions/cart-action";
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id : number = 0;
  product: Product | undefined;
  constructor(private route : ActivatedRoute, private productService : ProductService, private store : Store ){ }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(this.route.snapshot.params['id']).subscribe((data: Product) => {
      this.product = data;
    });
  }
  addToCart(product: Product) : void {
    this.store.dispatch(new AddProduct(product));
  }
}
