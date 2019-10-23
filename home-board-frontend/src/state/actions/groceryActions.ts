import { Grocery } from "../../components/groceries/Grocery";

export const CREATE_GROCERY = "CREATE_GROCERY_ITEM";

export interface CreateGroceryAction {
  type: typeof CREATE_GROCERY;
  payload: Grocery;
}

export function createGrocery(item: Grocery): CreateGroceryAction {
  return { type: CREATE_GROCERY, payload: item };
}
