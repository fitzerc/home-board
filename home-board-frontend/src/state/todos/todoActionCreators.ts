import { Todo } from "../../components/todos/Todo";
import { Dispatch } from "redux";
import { CREATE_TODO_SUCCESS, DELETE_TODO } from "./todoActionTypes";
import TodoAction from "./TodoAction";
import { GetTodoService } from "../../services/ServiceProvider";

const todoService = GetTodoService();

export function createTodo(todo: Todo) {
  return function(dispatch: Dispatch<TodoAction>) {
    todoService.addTodo(todo);
    return dispatch(createTodoSuccess(todo));
  };
}

export function deleteTodo(todo: Todo) {
  return function(dispatch: Dispatch<TodoAction>) {
    todoService.deleteTodo(todo);
    return dispatch(deleteTodoSuccess(todo));
  };
}

function createTodoSuccess(todo: Todo): TodoAction {
  return { type: CREATE_TODO_SUCCESS, payload: todo };
}

function deleteTodoSuccess(todo: Todo): TodoAction {
  return { type: DELETE_TODO, payload: todo };
}
