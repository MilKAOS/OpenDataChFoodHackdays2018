import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss']
})
export class RecipeSearchComponent implements OnInit {

  @Output()
  setFilter = new EventEmitter<object>();

  utensilList: string[];
  ingredientsList: any;

  utensils = new FormControl();
  ingredientsAvoid = new FormControl();
  ingredientsWant = new FormControl();

  maxTimeToPrepare: number = 9999;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.utensilList = this.recipeService.getUtensils();
    this.ingredientsList = this.recipeService.getIngredients();
  }

  onClick() {
    this.setFilter.emit({ tools: this.utensils.value, maxTime: this.maxTimeToPrepare * 60 });
  }
}
