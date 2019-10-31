import { Grocery } from "../../components/groceries/Grocery";

export default interface IGroceryService {
  addGroceryItem(item: Grocery): Promise<Grocery>;
  deleteGroceryItem(item: Grocery): void;
  getGroceries(): Promise<Grocery[]>;
}
