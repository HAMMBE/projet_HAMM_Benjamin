import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FormClientComponent} from "../form-client/form-client.component";
import {ShowCatalogueComponent} from "../show-catalogue/show-catalogue.component";
import {CartComponent} from "../cart/cart.component";
import {ProductDetailComponent} from "../product-detail/product-detail.component";
import {ReactiveFormsModule} from "@angular/forms";
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: "", component: ShowCatalogueComponent },
  { path: "catalogue", component: ShowCatalogueComponent},
  { path: "cart", component: CartComponent},
  { path: ":id", component: ProductDetailComponent },
];
@NgModule({
  declarations: [ShowCatalogueComponent, CartComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductModule { }
