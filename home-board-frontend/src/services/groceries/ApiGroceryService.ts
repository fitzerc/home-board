import IGroceryService from "./IGroceryService";

export default class ApiGroceryService implements IGroceryService {
  getGroceries(): import("../../components/groceries/Grocery").Grocery[] {
    throw new Error("Method not implemented.");
  }
  addGroceryItem(
    item: import("../../components/groceries/Grocery").Grocery
  ): void {
    throw new Error("Method not implemented.");
  }
  deleteGroceryItem(
    item: import("../../components/groceries/Grocery").Grocery
  ): void {
    throw new Error("Method not implemented.");
  }
}
