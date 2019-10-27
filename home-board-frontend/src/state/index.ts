import { combineReducers } from "redux";
import todoReducer from "./todos/todoReducer";
import mealReducer from "./meals/mealReducer";
import groceryReducer from "./groceries/groceryReducer";

export const rootReducer = combineReducers({
  todos: todoReducer,
  meals: mealReducer,
  groceries: groceryReducer
});

export type AppState = ReturnType<typeof rootReducer>;
