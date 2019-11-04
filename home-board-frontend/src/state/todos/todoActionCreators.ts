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
firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  projectId: ""
});

var db = firebase.firestore();

const todoService = GetTodoService();
const firebaseService = new FirebaseTodoService(db);

export function createTodo(todo: Todo) {
  return function(dispatch: Dispatch<TodoAction>) {
    todoService.addTodo(todo).then(newTodo => {
      return dispatch(createTodoSuccess(newTodo));
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
  let newTodos: Todo[] = [];
  return function(dispatch: Dispatch<TodosAction>) {
    return firebaseService.getTodos().then(snap => {
      snap.forEach(doc => {
        doc.ref
          .collection("todos")
          .get()
          .then(todos => {
            todos.forEach(todo => {
              newTodos.push({
                id: todo.id,
                item: todo.data().item,
                doDate: todo.data().doDate
              });
            });
            return dispatch(getTodosSuccess(newTodos));
          });
      });
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
