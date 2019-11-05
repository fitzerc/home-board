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
import MockTodoService from "../../services/todos/MockTodoService";
import { firestore } from "firebase";
import FirebaseTodoService from "../../services/todos/FirebaseTodoService";

const firebase = require("firebase");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({});

var db = firebase.firestore();

const todoService = GetTodoService();
const firebaseService = new FirebaseTodoService(db);

export function createTodo(todo: Todo) {
  return function(dispatch: Dispatch<TodoAction>) {
    firebaseService
      .addTodo(todo)
      .then(docRef => {
        return dispatch(
          createTodoSuccess({
            id: docRef.id,
            item: todo.item,
            doDate: todo.doDate
          })
        );
      })
      .catch(e => console.log(e));
  };
}

export function deleteTodo(todo: Todo) {
  return function(dispatch: Dispatch<TodoAction>) {
    firebaseService.deleteTodo(todo);
    return dispatch(deleteTodoSuccess(todo));
  };
}

export function getTodos() {
  return function(dispatch: Dispatch<TodosAction>) {
    return firebaseService.getTodos().then(todos => {
      return dispatch(
        getTodosSuccess(
          todos.docs.map(todo => {
            return {
              id: todo.id,
              item: todo.data().item,
              doDate: todo.data().doDate
            };
          })
        )
      );
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
