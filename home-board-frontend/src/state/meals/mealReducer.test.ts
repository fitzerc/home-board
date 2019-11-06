import { Meal } from "../../components/meals/Meal";
import { MealAction, MealsAction } from "./mealAction";
import {
  CREATE_MEAL_SUCCESS,
  GET_MEAL_SUCCESS,
  DELETE_MEAL_SUCCESS
} from "./mealActionTypes";
import mealReducer from "./mealReducer";

const state: Meal[] = [
  {
    id: 1,
    main: "chicken",
    side1: "broccoli",
    side2: "rice",
    date: new Date()
  },
  {
    id: 2,
    main: "pizza",
    side1: "wings",
    side2: "breadsticks",
    date: new Date()
  }
];

describe(`meal reducer tests`, () => {
  it(`should test state after create success`, () => {
    const action: MealAction = {
      type: CREATE_MEAL_SUCCESS,
      payload: {
        id: 3,
        main: "pork chops",
        side1: "potatoes",
        side2: "cupcakes",
        date: new Date()
      }
    };

    const result: Meal[] = [state[0], state[1], action.payload];

    expect(mealReducer(state, action)).toEqual(result);
  });

  it(`should be state after get success`, () => {
    const action: MealsAction = {
      type: GET_MEAL_SUCCESS,
      payload: state
    };

    expect(mealReducer([], action)).toEqual(state);
  });

  it(`should be state after delete`, () => {
    const action: MealAction = {
      type: DELETE_MEAL_SUCCESS,
      payload: state[1]
    };

    expect(mealReducer(state, action)).toEqual([state[0]]);
  });
});
