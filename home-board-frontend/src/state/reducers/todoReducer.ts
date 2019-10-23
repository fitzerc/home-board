import { Todo } from "../../components/todos/Todo";
import { TodoAction, CREATE_TODO, DELETE_TODO } from "../actions/todoActions";

export default function todoReducer(
  state: Todo[] = [
    { item: "fix fence", doDate: new Date() },
    { item: "mow lawn", doDate: new Date() }
  ],
  action: TodoAction
) {
  switch (action.type) {
    case CREATE_TODO:
      return [...state, { ...action.payload }];
    case DELETE_TODO:
      return state.filter(item => item !== action.payload);
    default:
      return state;
  }
}
