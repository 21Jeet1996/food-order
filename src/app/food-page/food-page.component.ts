import { Component } from '@angular/core';
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food!:Food;
  constructor(private activatedRote:ActivatedRoute, private fs:FoodService){
    activatedRote.params.subscribe((parama)=>{
      if(parama['id']){
        this.food = fs.getFoodById(parama['id']);
      }
    })
  }
}
