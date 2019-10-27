import { Todo } from "../../components/todos/Todo";

export default interface ITodoService {
  addTodo(todo: Todo): void;
  deleteTodo(todo: Todo): void;
}
