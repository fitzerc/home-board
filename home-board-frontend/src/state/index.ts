import { combineReducers } from "redux";
import todoReducer from "./todos/todoReducer";
import mealReducer from "./meals/mealReducer";
import groceryReducer from "./groceries/groceryReducer";
import authReducer from "./auth/authReducer";
import storeReducer from "./stores/storeReducer";

export const rootReducer = combineReducers({
  todos: todoReducer,
  meals: mealReducer,
  groceries: groceryReducer,
  authenticated: authReducer,
  stores: storeReducer
});

export type AppState = ReturnType<typeof rootReducer>;
