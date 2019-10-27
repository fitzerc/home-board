import { Grocery } from "../../components/groceries/Grocery";
import {
  GroceryAction,
  CREATE_GROCERY,
  DELETE_GROCERY
} from "./groceryActions";

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
  action: GroceryAction
) {
  switch (action.type) {
    case CREATE_GROCERY:
      return [...state, { ...action.payload }];
    case DELETE_GROCERY:
      return state.filter(item => item !== action.payload);
    default:
      return state;
  }
}
