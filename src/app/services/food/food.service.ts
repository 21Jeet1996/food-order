import { assertInInjectionContext, Injectable } from '@angular/core';
import {Food} from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return [
      {
        id:1,
        price:250,
        name: 'Burger Combo',
        favorite:false,
        star: 4,
        tags:['Fast Food','Breack Fast','Lunch'],
        imageUrl: '/assets/burgerCombo.jpg',
        cookTime:'10-20',
        origin:['India','Italy']
      },
      {
        id:2,
        price: 150,
        name: 'Chicken Curry',
        favorite: false,
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
        tags:['Linch', 'Dinner'],
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
        tags:['Fast Food','Lunch'],
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
        tags:['Break Fast','Lunch','Dinner'],
        imageUrl:'/assets/boildEgg.jpg',
        cookTime:'10-20',
        origin:['India'],
      },
    ]
  }
}
