import { Todo } from "../../components/todos/Todo";
import {
  CREATE_TODO_SUCCESS,
  DELETE_TODO,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURES
} from "./todoActionTypes";
import { TodoAction, TodosAction } from "./TodoAction";
import { Action } from "redux";

export default function todoReducer(state: Todo[] = [], action: Action) {
  switch (action.type) {
    case CREATE_TODO_SUCCESS:
      return [...state, { ...(action as TodoAction).payload }];
    case DELETE_TODO:
      return state.filter(item => item !== (action as TodoAction).payload);
    case GET_TODOS_SUCCESS:
      return (action as TodosAction).payload;
    case GET_TODOS_FAILURES:
      return state;
    default:
      return state;
  }
}
