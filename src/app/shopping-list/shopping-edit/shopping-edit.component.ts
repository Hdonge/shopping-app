import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import * as ShoppingListActions from "../store/shopping-list.actions";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingLsForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editeItem: Ingredient;


  constructor(private shoppinglsService: ShoppingListService, private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>) { }

  ngOnInit() {
    this.subscription = this.shoppinglsService.startedEditing.subscribe((index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editeItem = this.shoppinglsService.getIngredient(index);
      this.shoppingLsForm.setValue({
        name: this.editeItem.name,
        amount: this.editeItem.amount
      });
    });
  }

  onSubmit(form: NgForm) {

    const formValue = form.value;
    const newIngredient = new Ingredient(formValue.name, formValue.amount);
    if (this.editMode) {
      this.shoppinglsService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      console.log(newIngredient);
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }

    // Resetting form after update
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.shoppingLsForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppinglsService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
