import { combineReducers } from "redux";
import todoReducer from "./todos/todoReducer";
import mealReducer from "./meals/mealReducer";
import groceryReducer from "./groceries/groceryReducer";
import authReducer from "./auth/authReducer";

export const rootReducer = combineReducers({
  todos: todoReducer,
  meals: mealReducer,
  groceries: groceryReducer,
  authenticated: authReducer
});

export type AppState = ReturnType<typeof rootReducer>;
