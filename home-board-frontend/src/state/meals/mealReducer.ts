import {
  CREATE_MEAL_SUCCESS,
  DELETE_MEAL_SUCCESS,
  GET_MEAL_SUCCESS
} from "./mealActionTypes";
import { MealAction, MealsAction } from "./mealAction";
import { Action } from "redux";
import initialState from "../initialState";

export default function mealReducer(
  state = initialState.meals,
  action: Action
) {
  switch (action.type) {
    case CREATE_MEAL_SUCCESS:
      return [...state, { ...(action as MealAction).payload }];
    case DELETE_MEAL_SUCCESS:
      return state.filter(item => item !== (action as MealAction).payload);
    case GET_MEAL_SUCCESS:
      return (action as MealsAction).payload;
    default:
      return state;
  }
}
