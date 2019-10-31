import { Meal } from "../../components/meals/Meal";
import {
  CREATE_MEAL_SUCCESS,
  DELETE_MEAL_SUCCESS,
  GET_MEAL_SUCCESS
} from "./mealActionTypes";
import { MealAction, MealsAction } from "./mealAction";
import { Dispatch } from "redux";
import { GetMealService } from "../../services/ServiceProvider";

const mealService = GetMealService();

export function createMeal(meal: Meal) {
  return function(dispatch: Dispatch<MealAction>) {
    mealService.addMeal(meal);
    return dispatch(createMealSuccess(meal));
  };
}

export function deleteMeal(meal: Meal) {
  return function(dispatch: Dispatch<MealAction>) {
    mealService.deleteMeal(meal);
    return dispatch(deleteMealSuccess(meal));
  };
}

export function getMeals(meal: Meal) {
  return function(dispatch: Dispatch<MealsAction>) {
    return dispatch(getMealsSuccess(mealService.getMeals()));
  };
}

function getMealsSuccess(meals: Meal[]): MealsAction {
  return { type: GET_MEAL_SUCCESS, payload: meals };
}

function createMealSuccess(meal: Meal): MealAction {
  return { type: CREATE_MEAL_SUCCESS, payload: meal };
}

function deleteMealSuccess(meal: Meal): MealAction {
  return { type: DELETE_MEAL_SUCCESS, payload: meal };
}
