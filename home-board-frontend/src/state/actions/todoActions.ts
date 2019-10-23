import { Todo } from "../../components/todos/Todo";

export const CREATE_TODO = "CREATE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export interface TodoAction {
  type: string;
  payload: Todo;
}

export function createTodo(todo: Todo): TodoAction {
  return { type: CREATE_TODO, payload: todo };
}

export function deleteTodo(todo: Todo): TodoAction {
  return { type: DELETE_TODO, payload: todo };
}
