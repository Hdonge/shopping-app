import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test Recipe',
            'This is simply test',
            'http://www.maoritelevision.com/sites/default/files/styles/news_article_full/public/Kai%20Moana%20Paella.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Fries', 10),
            ]),
        new Recipe('Paella De Pollo',
            'This is simply test',
            'http://www.maoritelevision.com/sites/default/files/styles/news_article_full/public/Palle%20de%20pollo.png',
            [
                new Ingredient('Bread', 2),
                new Ingredient('Cheese', 1),
            ])

    ];

    getRecipes() {
        return this.recipes.slice();
    };
}