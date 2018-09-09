import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input() recipe: Recipe

  constructor() { 
  }

  ngOnInit() {
  }

}
