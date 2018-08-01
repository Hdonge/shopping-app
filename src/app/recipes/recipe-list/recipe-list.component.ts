import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is simply test', 'http://www.maoritelevision.com/sites/default/files/styles/news_article_full/public/Kai%20Moana%20Paella.jpg'),
    new Recipe('Paella De Pollo', 'This is simply test', 'http://www.maoritelevision.com/sites/default/files/styles/news_article_full/public/Palle%20de%20pollo.png')
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
