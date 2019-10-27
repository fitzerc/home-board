import ITodoService from "./ITodoService";
import { Todo } from "../../components/todos/Todo";

export default class MockTodoService implements ITodoService {
  addTodo(todo: Todo): void {
    console.log("Added");
    console.log(todo);
  }

  deleteTodo(todo: Todo): void {
    console.log("Deleted");
    console.log(todo);
  }
}
