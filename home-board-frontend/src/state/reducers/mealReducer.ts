import { Meal } from "../../components/meals/Meal";
import { MealAction, CREATE_MEAL, DELETE_MEAL } from "../actions/mealActions";

export default function mealReducer(
  state: Meal[] = [
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
  ],
  action: MealAction
) {
  switch (action.type) {
    case CREATE_MEAL:
      return [...state, { ...action.payload }];
    case DELETE_MEAL:
      return state.filter(item => item !== action.payload);
    default:
      return state;
  }
}
