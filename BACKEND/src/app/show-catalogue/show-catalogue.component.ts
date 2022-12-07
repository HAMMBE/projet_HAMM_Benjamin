import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from "../../Types/product";
import {Observable, of} from "rxjs";
import { map } from 'rxjs/internal/operators/map';
import {Store} from "@ngxs/store";
import {AddProduct} from "../../shared/actions/cart-action";
import {
  debounceTime,
  distinctUntilChanged,
  Subject
} from "rxjs";

@Component({
  selector: 'app-show-catalogue',
  templateUrl: './show-catalogue.component.html',
  styleUrls: ['./show-catalogue.component.css']
})
export class ShowCatalogueComponent implements OnInit {
  public products$!: Observable<Product[]>;

  public nameFilterChanged$ = new Subject<string>();

  public nameFilter: string = "";

  constructor(private productService : ProductService, private store : Store) { }

  filter : string = "";
  ngOnInit(): void {
    const debounceTimeMs = 300;
    this.nameFilterChanged$
      .pipe(debounceTime(debounceTimeMs), distinctUntilChanged())
      .subscribe(() => {
        this.getFilteredProducts();
      });
    this.products$ = this.productService.getProducts();
  }
  public filterProduct = (product: Product) => {
    return (
      product.name.toLowerCase().includes(this.nameFilter.toLowerCase())
    );
  };

  getFilteredProducts() : void {
    this.products$ = this.productService.getProducts().pipe(
      map(products => {
        return products.filter(this.filterProduct);
      })
    );
  }

  addToCart(product: Product) : void {
    this.store.dispatch(new AddProduct(product));
  }
}
