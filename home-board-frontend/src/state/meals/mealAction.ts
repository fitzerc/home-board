import { Meal } from "../../components/meals/Meal";

export interface MealAction {
  type: string;
  payload: Meal;
}

export interface MealsAction {
  type: string;
  payload: Meal[];
}
