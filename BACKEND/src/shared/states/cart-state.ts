import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import {AddProduct, DeleteProduct} from "../actions/cart-action";
import{CartStateModel} from "./cart-state-model";

@State<CartStateModel>({
  name: 'cart',
  defaults: {
    products: []
  },
})
@Injectable()
export class CartState {
  @Selector()
  static getProducts(state: CartStateModel) {
    return state.products;
  }
  @Selector()
  static getNbProductsInCart(state: CartStateModel) {
    return state.products.length;
  }
  @Action(AddProduct)
  add({ getState, patchState }: StateContext<CartStateModel>, { payload }: AddProduct) {
    const state = getState();
    patchState({
      products: [...state.products, payload]
    });
  }

  @Action(DeleteProduct)
  delete({ getState, patchState }: StateContext<CartStateModel>, { payload }: DeleteProduct) {
    patchState({
      products: getState().products.filter(a => a !== payload)
    });
  }

}
