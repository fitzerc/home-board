import { Grocery } from "../../components/groceries/Grocery";
import { Action } from "redux";

export interface GroceryAction extends Action {
  type: string;
  payload: Grocery;
}

export interface GroceriesAction extends Action {
  type: string;
  payload: Grocery[];
}
