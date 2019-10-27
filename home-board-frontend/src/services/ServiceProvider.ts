import MockTodoService from "./todos/MockTodoService";
import ITodoService from "./todos/ITodoService";
import ApiServiceProvider from "./todos/ApiTodoService";

const environment: string = "mock";
//const environment = "api";

export function GetTodoService(): ITodoService {
  if (environment === "database") {
    return new ApiServiceProvider();
  } else return new MockTodoService();
}
