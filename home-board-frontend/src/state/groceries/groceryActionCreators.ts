import { Grocery } from "../../components/groceries/Grocery";
import {
  CREATE_GROCERY_SUCCESS,
  DELETE_GROCERY_SUCCESS,
  GET_GROCERIES_SUCCESS
} from "./groceryActionTypes";
import { GroceryAction, GroceriesAction } from "./groceryActions";
import { GetGroceryService } from "../../services/ServiceProvider";
import { Dispatch } from "redux";

const groceryService = GetGroceryService();

export function createGrocery(item: Grocery) {
  return function(dispatch: Dispatch<GroceryAction>) {
    groceryService.addGroceryItem(item);
    return dispatch(createGrocerySuccess(item));
  };
}

export function deleteGrocery(item: Grocery) {
  return function(dispatch: Dispatch<GroceryAction>) {
    groceryService.deleteGroceryItem(item);
    return dispatch(deleteGrocerySuccess(item));
  };
}

export function getGroceries() {
  return function(dispatch: Dispatch<GroceriesAction>) {
    return dispatch(getGroceriesSuccess(groceryService.getGroceries()));
  };
}

function getGroceriesSuccess(items: Grocery[]): GroceriesAction {
  return { type: GET_GROCERIES_SUCCESS, payload: items };
}

function deleteGrocerySuccess(item: Grocery): GroceryAction {
  return { type: DELETE_GROCERY_SUCCESS, payload: item };
}

function createGrocerySuccess(item: Grocery): GroceryAction {
  return { type: CREATE_GROCERY_SUCCESS, payload: item };
}
