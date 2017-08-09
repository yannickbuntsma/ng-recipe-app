import {Component, OnInit, OnDestroy, Output} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [
      new Ingredient('Apples', 5),
      new Ingredient('Bananas', 2),
      new Ingredient('Strawberries', 10),
  ];

  @Output() shoppingListActive: boolean;
  constructor() { }

  ngOnInit() {
    this.shoppingListActive = true;
  }

  ngOnDestroy() {
    this.shoppingListActive = false;
  }

}
