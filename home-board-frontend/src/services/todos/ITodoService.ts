import { Todo } from "../../components/todos/Todo";

export default interface ITodoService {
  addTodo(todo: Todo): Promise<Todo>;
  deleteTodo(todo: Todo): void;
  getTodos(): Promise<Todo[]>;
}
