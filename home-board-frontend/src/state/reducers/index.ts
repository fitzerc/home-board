import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import mealReducer from "./mealReducer";

export const rootReducer = combineReducers({
  todos: todoReducer,
  meals: mealReducer
});

export type AppState = ReturnType<typeof rootReducer>;
