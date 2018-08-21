import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

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

    constructor(private shoppinglsService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        // id= index
        return this.recipes[id];
    }

    addIngredientsToRecipeService(ingredients: Ingredient[]) {
        this.shoppinglsService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
}
