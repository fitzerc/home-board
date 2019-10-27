import { Grocery } from "../../components/groceries/Grocery";

export const CREATE_GROCERY = "CREATE_GROCERY_ITEM";
export const DELETE_GROCERY = "DELETE_GROCERY";

export interface GroceryAction {
  type: string;
  payload: Grocery;
}

export function createGrocery(item: Grocery): GroceryAction {
  return { type: CREATE_GROCERY, payload: item };
}

export function deleteGrocery(item: Grocery): GroceryAction {
  return { type: DELETE_GROCERY, payload: item };
}
