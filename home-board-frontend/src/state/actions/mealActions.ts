import { Meal } from "../../components/meals/Meal";

export const CREATE_MEAL = "CREATE_MEAL";

export interface CreateMealAction {
  type: typeof CREATE_MEAL;
  payload: Meal;
}

export function createMeal(meal: Meal): CreateMealAction {
  return { type: CREATE_MEAL, payload: meal };
}
