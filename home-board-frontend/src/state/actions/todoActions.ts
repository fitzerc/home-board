import { Todo } from "../../components/todos/Todo";

export const CREATE_TODO = "CREATE_TODO";

export interface CreateTodoAction {
  type: typeof CREATE_TODO;
  payload: Todo;
}

export function createTodo(todo: Todo): CreateTodoAction {
  return { type: CREATE_TODO, payload: todo };
}
