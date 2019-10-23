import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import mealReducer from "./mealReducer";
import groceryReducer from "./groceryReducer";

export const rootReducer = combineReducers({
  todos: todoReducer,
  meals: mealReducer,
  groceries: groceryReducer
});

export type AppState = ReturnType<typeof rootReducer>;
