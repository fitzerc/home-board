import MockTodoService from "./todos/MockTodoService";
import ITodoService from "./todos/ITodoService";
import ApiTodoService from "./todos/ApiTodoService";
import IGroceryService from "./groceries/IGroceryService";
import MockGroceryService from "./groceries/MockGroceryService";
import ApiGroceryService from "./groceries/ApiGroceryService";
import IMealService from "./meals/IMealService";
import ApiMealService from "./meals/ApiMealService";
import MockMealService from "./meals/MockMealService";
import FirebaseTodoService from "./todos/FirebaseTodoService";
import FirebaseGroceryService from "./groceries/FirebaseGroceryService";
import FirebaseMealService from "./meals/FirebaseMealService";
import { db } from "./FirestoreDb";
import BaseAuthService from "./auth/BaseAuthService";
import MockAuthService from "./auth/MockAuthService";
import AuthService from "./auth/AuthService";

export const apiUrl: string = "https://localhost:44368/api/";

enum env {
  database,
  firebase,
  mock
}

const environment = env.firebase;

export function GetTodoService(): ITodoService {
  switch (+environment) {
    case env.database:
      return new ApiTodoService();
    case env.firebase:
      return new FirebaseTodoService(db);
    default:
      return new MockTodoService();
  }
}

export function GetGroceryService(): IGroceryService {
  switch (+environment) {
    case env.database:
      return new ApiGroceryService();
    case env.firebase:
      return new FirebaseGroceryService(db);
    default:
      return new MockGroceryService();
  }
}

export function GetMealService(): IMealService {
  switch (+environment) {
    case env.database:
      return new ApiMealService();
    case env.firebase:
      return new FirebaseMealService(db);
    default:
      return new MockMealService();
  }
}

export function GetAuthService(): BaseAuthService {
  switch (+environment) {
    case env.database:
      return new MockAuthService();
    case env.firebase:
      return new AuthService();
    default:
      return new MockAuthService();
  }
}
