import IMealService from "./IMealService";
import { Meal } from "../../components/meals/Meal";
import { apiUrl } from "../ServiceProvider";

export default class ApiMealService implements IMealService {
  getMeals(): Promise<Meal[]> {
    return fetch(apiUrl + "Meal").then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  addMeal(meal: Meal): Promise<Meal> {
    return fetch(apiUrl + "Meal", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(meal)
    }).then(res => res.json());
  }

  deleteMeal(meal: Meal): void {
    throw new Error("Method not implemented.");
  }
}
