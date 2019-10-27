import { Todo } from "../../components/todos/Todo";
import { CREATE_TODO_SUCCESS, DELETE_TODO } from "./todoActionTypes";
import TodoAction from "./TodoAction";

export default function todoReducer(
  state: Todo[] = [
    { item: "fix fence", doDate: new Date() },
    { item: "mow lawn", doDate: new Date() }
  ],
  action: TodoAction
) {
  switch (action.type) {
    case CREATE_TODO_SUCCESS:
      return [...state, { ...action.payload }];
    case DELETE_TODO:
      return state.filter(item => item !== action.payload);
    default:
      return state;
  }
}
