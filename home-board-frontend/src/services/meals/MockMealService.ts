import IMealService from "./IMealService";
import { Meal } from "../../components/meals/Meal";

export default class MockMealService implements IMealService {
  getMeals(): Promise<Meal[]> {
    return new Promise<Meal[]>((resolve, reject) => {
      resolve([
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
      ]);
    });
  }

  addMeal(meal: Meal): Promise<Meal> {
    return new Promise<Meal>((resolve, reject) => {
      console.log(meal);
    });
  }

  deleteMeal(meal: Meal): void {
    console.log("delete");
    console.log(meal);
  }
}
