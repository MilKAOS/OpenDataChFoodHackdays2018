import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {

  recipeService: RecipeService;
  recipes: Recipe[];//Observable<Recipe[]>;

  @Output()
  ingredients: any;

  maxTime: number = 9999;

  showWeekPlan: boolean = false;
  showShoppingList: boolean = false;

  constructor(recipeService: RecipeService) {
    this.recipeService = recipeService;
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  doSetFilter(event) {

    console.log(event);

    // maxTime
    this.recipes = this.recipeService.getRecipes().filter((el,i,a) => 
    {
      return el.fullTime <= event.maxTime;
    });

    // tools
    if (event.tools !== null && event.tools !== undefined && event.tools.length > 0)
    {     
      this.recipes = this.recipes.filter((el,i,a) => 
      {
        var hasAllTools = true;
        var tools = el.recipe.toolsArr;

        Object.keys(tools).forEach(key => {
          if (event.tools.indexOf(tools[key].name) < 0)
          {
            console.log("does not have "+tools[key].name);
            hasAllTools = false;
            return;
          }
        });
        console.log(hasAllTools);
        return hasAllTools;
      });
    }

    this.showWeekPlan = true;
  }

  doCreateShoppingList(event) {
    console.log(event);

    if (event !== null && event !== undefined) {

      var recipes = this.recipeService.getRecipes();
      
      var result = [];
      event.result.map(name => {
        if (name !== null && name !== undefined)
        {
          var r = recipes.find(r => r.name == name);
          r.recipe.ingredientsArr.map(i => {             
            var existingItem = result.find(item => item.id == i.id);
            if (existingItem !== null && existingItem !== undefined)
              existingItem.amount += i.amount;
            else
              result.push({ id: i.id, name: i.name, amount: i.amount, unit: i.unit }); 
          });
        }
      });

      this.ingredients = result;
    }

    this.showShoppingList = true;
  }

}
