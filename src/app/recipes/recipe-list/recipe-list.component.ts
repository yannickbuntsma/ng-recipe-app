import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  @Output() recipes: Recipe[] = [
      // Hier roep je de constructor van het recipe.model.ts aan!!
      new Recipe('A Test Recipe', 'This is simply a text', 'https://static.pexels.com/photos/372851/pexels-photo-372851.jpeg'),
      new Recipe('A Very Yummy Recipe', 'Definitely make this one!', 'https://images.pexels.com/photos/9510/food-pizza-kitchen-recipe.jpg?w=1260&h=750&auto=compress&cs=tinysrgb')
  ];


  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
