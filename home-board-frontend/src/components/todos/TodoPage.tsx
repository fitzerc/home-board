import React from "react";
import TodoTable from "./TodoTable";
import AddTodo from "./AddTodo";
import { connect } from "react-redux";
import * as todoActions from "../../state/actions/todoActions";
import { AppState } from "../../state/reducers";
import { bindActionCreators } from "redux";

type props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const TodoPage: React.FunctionComponent<props> = props => {
  return (
    <>
      <h1>Todo List</h1>
      <TodoTable todoItems={props.todoList} deleteTodo={props.deleteTodo} />
      <hr />
      <AddTodo addClicked={todo => props.addTodo(todo)} />
    </>
  );
};

function mapStateToProps(state: AppState) {
  return {
    todoList: state.todos
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    addTodo: bindActionCreators(todoActions.createTodoThunk, dispatch),
    deleteTodo: bindActionCreators(todoActions.deleteTodo, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoPage);
