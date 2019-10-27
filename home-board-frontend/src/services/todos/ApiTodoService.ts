import ITodoService from "./ITodoService";

export default class ApiServiceProvider implements ITodoService {
  addTodo(todo: import("../../components/todos/Todo").Todo): void {
    throw new Error("Method not implemented.");
  }
  deleteTodo(todo: import("../../components/todos/Todo").Todo): void {
    throw new Error("Method not implemented.");
  }
}
