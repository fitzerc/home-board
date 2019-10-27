import { Action } from "redux";
import { Todo } from "../../components/todos/Todo";

export default interface TodoAction extends Action {
  type: string;
  payload: Todo;
}
