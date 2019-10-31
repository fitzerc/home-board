import IMealService from "./IMealService";
import { Meal } from "../../components/meals/Meal";

export default class MockMealService implements IMealService {
  getMeals(): Meal[] {
    return [
      {
        main: "chicken",
        side1: "rice",
        side2: "asparagus",
        date: new Date()
      },
      {
        main: "pizza",
        side1: "wings",
        side2: "breadsticks",
        date: new Date()
      }
    ];
  }
  addMeal(meal: Meal): void {
    console.log("add");
    console.log(meal);
  }
  deleteMeal(meal: Meal): void {
    console.log("delete");
    console.log(meal);
  }
}
