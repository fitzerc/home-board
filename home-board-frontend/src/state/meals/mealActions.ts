import { Meal } from "../../components/meals/Meal";

export const CREATE_MEAL = "CREATE_MEAL";
export const DELETE_MEAL = "DELETE_MEAL";

export interface MealAction {
  type: string;
  payload: Meal;
}

export function createMeal(meal: Meal): MealAction {
  return { type: CREATE_MEAL, payload: meal };
}

export function deleteMeal(meal: Meal): MealAction {
  return { type: DELETE_MEAL, payload: meal };
}
