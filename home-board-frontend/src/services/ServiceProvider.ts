import MockTodoService from "./todos/MockTodoService";
import ITodoService from "./todos/ITodoService";
import ApiTodoService from "./todos/ApiTodoService";
import IGroceryService from "./groceries/IGroceryService";
import MockGroceryService from "./groceries/MockGroceryService";
import ApiGroceryService from "./groceries/ApiGroceryService";
import IMealService from "./meals/IMealService";
import ApiMealService from "./meals/ApiMealService";
import MockMealService from "./meals/MockMealService";

const environment: string = "mock";
export const apiUrl: string = "https://localhost:44368/api/";
//const environment = "api";
//const environment = "firebase";

export function GetTodoService(): ITodoService {
  if (environment === "database") {
    return new ApiTodoService();
  } else return new MockTodoService();
}

export function GetGroceryService(): IGroceryService {
  if (environment === "database") {
    return new ApiGroceryService();
  } else return new MockGroceryService();
}

export function GetMealService(): IMealService {
  if (environment === "database") {
    return new ApiMealService();
  } else return new MockMealService();
}
