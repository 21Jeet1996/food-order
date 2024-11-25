import { assertInInjectionContext, Injectable } from '@angular/core';
import {Food} from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoodByTag(tags:string):Food[]{
   // return tags=="All"?this.getAll():this.getAll().filter(food=>food.tags?.includes(tags));
    if(tags=="All"){
      return this.getAll();

    }else{
      console.log(this.getAll().filter(food=>food.tags?.includes(tags)));
      return this.getAll().filter(food=>food.tags?.includes(tags));
    }

  }

  getAllTag():Tag[]{
    return[
      {name:'All', count:14},
      { name:'FastFood' , count:4 },
      { name:'Pizza' , count:2 },
      { name:'Lunch' , count:3 },
      { name:'SlowFood' , count:4 },
      { name:'Humburger' , count:1 },
      { name:'Fry' , count:1 },
      { name:'Soup' , count:1 },
   ]
  }
  
  getAll():Food[]{
    return [
      {
        id:1,
        price:250,
        name: 'Burger Combo',
        favorite:false,
        star: 4,
        tags:['FastFood','BreackFast'],
        imageUrl: '/assets/burgerCombo.jpg',
        cookTime:'10-20',
        origin:['India','Italy']
      },
      {
        id:2,
        price: 150,
        name: 'Chicken Curry',
        favorite: true,
        star: 4.5,
        tags:['Lunch', 'Dinner'],
        imageUrl: '/assets/chickenCurry.jpg',
        cookTime:'20-30',
        origin:['India']
      },
      {
        id:3,
        price: 60,
        name: 'Falooda',
        favorite:false,
        star:4.2,
        tags:['Dessert'],
        imageUrl:'/assets/falooda.jpg',
        cookTime:'5-10',
        origin:['India'],
      },
      {
        id:4,
        price: 20,
        name: 'Ice-Cream',
        favorite: false,
        star:5,
        tags:['Dessert'],
        imageUrl:'/assets/iceCream.jpg',
        cookTime:'5-10',
        origin:['India','France','Italy'],
      },
      {
        id:5,
        price: 70,
        name: 'Pasta',
        favorite:false,
        star:3.5,
        tags:['Breakfast','Lunch'],
        imageUrl:'/assets/pasta.jpg',
        cookTime:'15-20',
        origin:['Italy'],
      },
      {
        id:6,
        price: 200 ,
        name: 'Pizza',
        favorite:false,
        star: 5,
        tags:['Lunch', 'Dinner'],
        imageUrl:'/assets/pizza.jpg',
        cookTime:'20-30',
        origin:['Italy', 'India'],
      },
      {
        id:7,
        price:60,
        name: 'SandWicth',
        favorite:false,
        star:5,
        tags:['BreackFast','Lunch'],
        imageUrl:'/assets/sandwitch.jpg',
        cookTime:'15-20',
        origin:['India'],
      },
      {
        id:8,
        price: 99,
        name: 'Burger',
        favorite:false,
        star:5,
        tags:['FastFood','Lunch'],
        imageUrl:'/assets/burger.jpg',
        cookTime:'20-30',
        origin:['India','Italy'],
      },
      {
        id:9,
        price:10,
        name: 'Boild Egg',
        favorite:false,
        star: 4,
        tags:['BreakFast','Lunch','Dinner'],
        imageUrl:'/assets/boildEgg.jpg',
        cookTime:'10-20',
        origin:['India'],
      },
    ]
  }
  getFoodById(id:number):Food{
    return this.getAll().find(food=>food.id==id)!;
  }

}
