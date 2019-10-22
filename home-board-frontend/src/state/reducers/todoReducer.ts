import { Todo } from "../../components/todos/Todo";
import { CreateTodoAction, CREATE_TODO } from "../actions/todoActions";

export default function todoReducer(
  state: Todo[] = [
    { item: "fix fence", doDate: new Date() },
    { item: "mow lawn", doDate: new Date() }
  ],
  action: CreateTodoAction
) {
  switch (action.type) {
    case CREATE_TODO:
      return [...state, { ...action.payload }];
    default:
      return state;
  }
}
