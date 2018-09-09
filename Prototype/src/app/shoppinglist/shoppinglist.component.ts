import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';
import { RecipeService } from '../services/recipe.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss']
})
export class ShoppinglistComponent implements OnInit {

  @Input()
  ingredients: any;

  recipeService: RecipeService;

  constructor(recipeService: RecipeService) {
    this.recipeService = recipeService;
  }

  ngOnInit() {
    this.calculateIngredients();
  }

  calculateIngredients(){
    
    console.log("2" + this.ingredients);

    
  }
}
