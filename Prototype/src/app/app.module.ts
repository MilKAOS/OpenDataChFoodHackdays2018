import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatOptionModule, MatSelectModule, MatInputModule, MatDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { RecipeComponent } from './recipe/recipe.component';
import { WeekplanComponent } from './weekplan/weekplan.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeSearchComponent,
    RecipeComponent,
    WeekplanComponent,
    ShoppinglistComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
