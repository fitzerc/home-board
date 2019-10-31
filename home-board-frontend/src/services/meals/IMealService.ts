import { Meal } from "../../components/meals/Meal";

export default interface IMealService {
  addMeal(meal: Meal): Promise<Meal>;
  deleteMeal(meal: Meal): void;
  getMeals(): Promise<Meal[]>;
}
