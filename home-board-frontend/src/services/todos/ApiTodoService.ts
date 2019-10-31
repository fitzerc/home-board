import ITodoService from "./ITodoService";
import { Todo } from "../../components/todos/Todo";
import { apiUrl } from "../ServiceProvider";

export default class ApiTodoService implements ITodoService {
  getTodos(): Promise<Todo[]> {
    return fetch(apiUrl + "Todo").then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }
  addTodo(todo: Todo): Promise<Todo> {
    return fetch(apiUrl + "Todo", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
    }).then(res => res.json());
  }
  deleteTodo(todo: import("../../components/todos/Todo").Todo): void {
    throw new Error("Method not implemented.");
  }
}
