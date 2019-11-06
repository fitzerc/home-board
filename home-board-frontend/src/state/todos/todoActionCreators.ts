import { Todo } from "../../components/todos/Todo";
import { Dispatch } from "redux";
import {
  CREATE_TODO_SUCCESS,
  DELETE_TODO,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURES
} from "./todoActionTypes";
import { TodoAction, TodosAction } from "./TodoAction";
import { GetTodoService } from "../../services/ServiceProvider";

const todoService = GetTodoService();

export function createTodo(todo: Todo) {
  return function(dispatch: Dispatch<TodoAction>) {
    todoService.addTodo(todo).then(todo => {
      return dispatch(createTodoSuccess(todo));
    });
  };
}

export function deleteTodo(todo: Todo) {
  return function(dispatch: Dispatch<TodoAction>) {
    todoService.deleteTodo(todo);
    return dispatch(deleteTodoSuccess(todo));
  };
}

export function getTodos() {
  return function(dispatch: Dispatch<TodosAction>) {
    todoService.getTodos().then(todos => {
      return dispatch(getTodosSuccess(todos));
    });
  };
}

function getTodosFailure(error: any) {
  return { type: GET_TODOS_FAILURES, payload: [] };
}

function getTodosSuccess(todos: Todo[]) {
  return { type: GET_TODOS_SUCCESS, payload: todos };
}

function createTodoSuccess(todo: Todo): TodoAction {
  return { type: CREATE_TODO_SUCCESS, payload: todo };
}

function deleteTodoSuccess(todo: Todo): TodoAction {
  return { type: DELETE_TODO, payload: todo };
}
