import React, { useEffect } from "react";
import TodoTable from "./TodoTable";
import AddTodo from "./AddTodo";
import { connect } from "react-redux";
import * as actionCreator from "../../state/todos/todoActionCreators";
import { AppState } from "../../state";
import { bindActionCreators, Dispatch } from "redux";
import { Todo } from "./Todo";

type props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const TodoPage: React.FunctionComponent<props> = props => {
  useEffect(() => {
    props.getTodos();
  }, []);

  function addTodo(todo: Todo) {
    if (!props.authenticated) {
      alert("must be signed in");
      return;
    }

    props.addTodo(todo);
  }

  function deleteTodo(todo: Todo) {
    if (!props.authenticated) {
      alert("must be signed in");
      return;
    }

    props.deleteTodo(todo);
  }

  return (
    <>
      <h1>Todo List</h1>
      <TodoTable todoItems={props.todoList} deleteTodo={deleteTodo} />
      <hr />
      <AddTodo addClicked={todo => addTodo(todo)} />
    </>
  );
};

export function mapStateToProps(state: AppState) {
  return {
    todoList: state.todos,
    authenticated: state.authenticated
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addTodo: bindActionCreators(actionCreator.createTodo, dispatch),
    getTodos: bindActionCreators(actionCreator.getTodos, dispatch),
    deleteTodo: bindActionCreators(actionCreator.deleteTodo, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoPage);
