import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { Food } from '../shared/models/food';
import { CartItem } from '../shared/models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  constructor() { }

  addToCart(food:Food){
    let cartItem =this.cart.item.find(item=>item.food.id===food.id);
    if(cartItem){
      this.changeQuantity(food.id,cartItem.quantity+1);
      return;
    }
    this.cart.item.push(new CartItem(food));
  }

  removeFromCart(foodId:number){
    this.cart.item=this.cart.item.filter(item=>item.food.id!=foodId)
  }
  changeQuantity(id:number,quantity:number){
    let cartItem = this.cart.item.find(item=>item.food.id === id);
    if( !cartItem){
      return;
    }
    cartItem.quantity=quantity;
  }
  getCart():Cart{
    return this.cart;
  }
}
