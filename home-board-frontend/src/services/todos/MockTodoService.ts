import ITodoService from "./ITodoService";
import { Todo } from "../../components/todos/Todo";

export default class MockTodoService implements ITodoService {
  addTodo(todo: Todo): Promise<Todo> {
    return new Promise<Todo>((resolve, reject) => {
      resolve(todo);
    });
  }

  deleteTodo(todo: Todo): void {
    console.log("Deleted");
    console.log(todo);
  }

  getTodos(): Promise<Todo[]> {
    return new Promise<Todo[]>((resolve, reject) => {
      resolve([
        { id: "1", item: "fixx fence", doDate: new Date().toDateString() },
        { id: "2", item: "moww lawn", doDate: new Date().toDateString() }
      ]);
    });
  }
}
