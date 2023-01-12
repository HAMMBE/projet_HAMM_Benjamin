import {Product} from "../../Types/product";

export class AddProduct{
  static readonly type = '[Cart] Add';
  constructor(public payload: Product) {
  }
}

export class DeleteProduct{
  static readonly type = '[Cart] Delete';
  constructor(public payload: Product) {}
}
