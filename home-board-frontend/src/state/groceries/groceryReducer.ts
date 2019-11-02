import {
  CREATE_GROCERY_SUCCESS,
  DELETE_GROCERY_SUCCESS,
  GET_GROCERIES_SUCCESS
} from "./groceryActionTypes";
import { GroceryAction, GroceriesAction } from "./groceryActions";
import { Action } from "redux";
import initialState from "../initialState";

export default function groceryReducer(
  state = initialState.groceries,
  action: Action
) {
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
