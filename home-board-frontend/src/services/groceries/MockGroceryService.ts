import IGroceryService from "./IGroceryService";
import { Grocery } from "../../components/groceries/Grocery";

export default class MockGroceryService implements IGroceryService {
  getGroceries(): Grocery[] {
    return [
      {
        item: "bananas",
        itemType: "perishable"
      },
      {
        item: "frozen peas",
        itemType: "frozen"
      }
    ];
  }
  addGroceryItem(item: Grocery): void {
    console.log("add");
    console.log(item);
  }
  deleteGroceryItem(item: Grocery): void {
    console.log("delete");
    console.log(item);
  }
}
