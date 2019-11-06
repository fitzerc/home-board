import {
  CREATE_TODO_SUCCESS,
  GET_TODOS_SUCCESS,
  DELETE_TODO,
  GET_TODOS_FAILURES
} from "./todoActionTypes";
import { TodoAction, TodosAction } from "./TodoAction";
import todoReducer from "./todoReducer";
import { Todo } from "../../components/todos/Todo";

const state: Todo[] = [
  {
    id: "1",
    item: "first todo",
    doDate: "01/01/2001"
  },
  {
    id: "2",
    item: "second todo",
    doDate: "01/02/2001"
  }
];

describe(`todo reducer tests`, () => {
  it(`should test state after create success`, () => {
    const action: TodoAction = {
      type: CREATE_TODO_SUCCESS,
      payload: {
        id: "3",
        item: "third todo",
        doDate: "03/01/2001"
      }
    };

    const result: Todo[] = [
      state[0],
      state[1],
      {
        id: action.payload.id,
        item: action.payload.item,
        doDate: action.payload.doDate
      }
    ];

    expect(todoReducer(state, action)).toEqual(result);
  });

  it(`should be state after get success`, () => {
    const action: TodosAction = {
      type: GET_TODOS_SUCCESS,
      payload: state
    };

    expect(todoReducer([], action)).toEqual(state);
  });

  it(`should be state after get failure`, () => {
    expect(todoReducer(state, { type: GET_TODOS_FAILURES })).toEqual(state);
  });

  it(`should be state after delete`, () => {
    const action: TodoAction = {
      type: DELETE_TODO,
      payload: state[1]
    };

    expect(todoReducer(state, action)).toEqual([state[0]]);
  });
});
