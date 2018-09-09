import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { RECIPES } from '../models/recipe-data';
import { EventEmitter } from 'events';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  
  getRecipes(): Recipe[] {
    return RECIPES;
  };

  getUtensils(): string[] {
    var toolsArrays = RECIPES.map(r => r.recipe.toolsArr);
    var utensils = [];
    
    toolsArrays.map(ta => 
    { 
      var v = [];
      Object.keys(ta).forEach(key => {
        v.push(ta[key].name);
      });
      utensils = utensils.concat(v);
    });
    
    return utensils.filter((el, i, a) => i === a.indexOf(el)).sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    }); 
  };

  getIngredients(): any {
    var result = [];
    RECIPES.map(r => r.recipe.ingredientsArr.map(i => 
      {
        result.push(i.name)
      }));
    return result.filter((el, i, a) => i === a.indexOf(el)).sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
  };

  // getRecipies(): Observable<Recipe[]> {
  //   return of(RECIPES);
  // };
  
}
