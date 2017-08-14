import {Component, OnDestroy, OnInit, Output} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit, OnDestroy {
  @Output() recipesActive: boolean;
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
    this.recipesActive = true;
  }

  ngOnDestroy() {
    this.recipesActive = false;
  }

}
