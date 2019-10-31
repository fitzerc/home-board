import { Grocery } from "../../components/groceries/Grocery";
import {
  CREATE_GROCERY_SUCCESS,
  DELETE_GROCERY_SUCCESS,
  GET_GROCERIES_SUCCESS
} from "./groceryActionTypes";
import { GroceryAction, GroceriesAction } from "./groceryActions";
import { Action } from "redux";

export default function groceryReducer(state: Grocery[] = [], action: Action) {
  switch (action.type) {
    case CREATE_GROCERY_SUCCESS:
      return [...state, { ...(action as GroceryAction).payload }];
    case DELETE_GROCERY_SUCCESS:
      console.log("in switch");
      return state.filter(item => item !== (action as GroceryAction).payload);
    case GET_GROCERIES_SUCCESS:
      return (action as GroceriesAction).payload;
    default:
      return state;
  }
}
