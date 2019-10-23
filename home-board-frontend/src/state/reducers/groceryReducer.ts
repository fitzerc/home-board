import { Grocery } from "../../components/groceries/Grocery";
import { CreateGroceryAction, CREATE_GROCERY } from "../actions/groceryActions";

export default function groceryReducer(
  state: Grocery[] = [
    {
      item: "bananas",
      itemType: "perishable"
    },
    {
      item: "frozen peas",
      itemType: "frozen"
    }
  ],
  action: CreateGroceryAction
) {
  switch (action.type) {
    case CREATE_GROCERY:
      return [...state, { ...action.payload }];
    default:
      return state;
  }
}
