import { Grocery } from "../../components/groceries/Grocery";

export default interface IGroceryService {
  addGroceryItem(item: Grocery): void;
  deleteGroceryItem(item: Grocery): void;
  getGroceries(): Grocery[];
}
