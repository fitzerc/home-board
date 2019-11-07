import IGroceryService from "./IGroceryService";
import { Grocery } from "../../components/groceries/Grocery";

export default class MockGroceryService implements IGroceryService {
  getGroceries(): Promise<Grocery[]> {
    return new Promise<Grocery[]>((resolve, reject) => {
      resolve([
        { id: "1", item: "bananas", itemType: "perishable" },
        { id: "2", item: "frozen peas", itemType: "frozen" }
      ]);
    });
  }

  addGroceryItem(item: Grocery): Promise<Grocery> {
    return new Promise<Grocery>((resolve, reject) => {
      resolve(item);
    });
  }

  deleteGroceryItem(item: Grocery): void {
    console.log("delete");
    console.log(item);
  }
}
