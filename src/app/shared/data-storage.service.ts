import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) { }

    storeRecipes() {
        return this.http.put('https://ng-recipe-book-6ce44.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        /* let tk = '';
        this.authService.getToken()
            .then((token: string) => {
                tk = token;
            }); */

        this.http.get('https://ng-recipe-book-6ce44.firebaseio.com/recipes.json').subscribe((response: Response) => {
            const recipes: Recipe[] = response.json();
            this.recipeService.setRecipes(recipes);
        });
    }
}
