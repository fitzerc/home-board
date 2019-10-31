import IGroceryService from "./IGroceryService";
import { Grocery } from "../../components/groceries/Grocery";
import { apiUrl } from "../ServiceProvider";

export default class ApiGroceryService implements IGroceryService {
  getGroceries(): Promise<Grocery[]> {
    return fetch(apiUrl + "Grocery").then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  addGroceryItem(item: Grocery): Promise<Grocery> {
    return fetch(apiUrl + "Grocery", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, /*/",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    }).then(res => res.json());
  }

  deleteGroceryItem(item: Grocery): void {
    throw new Error("Method not implemented.");
  }
}
