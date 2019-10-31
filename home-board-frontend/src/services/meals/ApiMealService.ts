import IMealService from "./IMealService";
import { Meal } from "../../components/meals/Meal";

export default class ApiMealService implements IMealService {
  getMeals(): Meal[] {
    throw new Error("Method not implemented.");
  }
  addMeal(meal: Meal): void {
    throw new Error("Method not implemented.");
  }
  deleteMeal(meal: Meal): void {
    throw new Error("Method not implemented.");
  }
}
