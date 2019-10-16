import React from "react";
import { Todo } from "./Todo";
import TodoRow from "./TodoRow";

interface Props {
  todoItems: Todo[];
}

const TodoTable: React.FunctionComponent<Props> = ({ todoItems }) => {
  return (
    <table className="table table-sm">
      <thead>
        <tr>
          <th scope="col">Todo</th>
        </tr>
      </thead>
      {todoItems.map(todo => {
        return <TodoRow todo={todo} key={todo.item} />;
      })}
    </table>
  );
};

export default TodoTable;
