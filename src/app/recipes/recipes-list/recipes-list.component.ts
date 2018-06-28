import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this is a test',
      'http://downloads.bbc.co.uk/skillswise/entry12/english/en05skim/images/en05skim-e2-w-scanning-a-recipe-tikka-masala-752x1065.jpg'
    )
  ];

  constructor() {}

  ngOnInit() {}
}
