import { Meal } from "../../components/meals/Meal";

export default interface IMealService {
  addMeal(meal: Meal): void;
  deleteMeal(meal: Meal): void;
  getMeals(): Meal[];
}
