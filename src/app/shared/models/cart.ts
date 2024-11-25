import { CartItem } from "./cartItem";

export class Cart{
    item:CartItem[]=[];

    get TotalPrice():number{
        let totalPrice=0;
        this.item.forEach(item => {
            totalPrice +=item.Price;
        });
        return totalPrice;
    }
}