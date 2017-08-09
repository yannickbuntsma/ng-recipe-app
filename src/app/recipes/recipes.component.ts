import {Component, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit, OnDestroy {
  @Output() recipesActive: boolean;
  constructor() { }

  ngOnInit() {
    this.recipesActive = true;
  }

  ngOnDestroy() {
    this.recipesActive = false;
  }

}
