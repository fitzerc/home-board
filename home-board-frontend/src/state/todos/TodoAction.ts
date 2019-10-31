import { Action } from "redux";
import { Todo } from "../../components/todos/Todo";

export interface TodoAction extends Action {
  type: string;
  payload: Todo;
}

export interface TodosAction extends Action {
  type: string;
  payload: Todo[];
}
