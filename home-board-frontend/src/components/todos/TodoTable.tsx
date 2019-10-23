import React from "react";
import { Todo } from "./Todo";
import TodoRow from "./TodoRow";

interface Props {
  todoItems: Todo[];
  deleteTodo: (todo: Todo) => void;
}

const TodoTable: React.FunctionComponent<Props> = ({
  todoItems,
  deleteTodo
}) => {
  return (
    <table className="table table-sm">
      <thead>
        <tr>
          <th scope="col">Todo</th>
          <th scope="col">Do Date</th>
        </tr>
      </thead>
      {todoItems.map(todo => {
        return <TodoRow todo={todo} key={todo.item} deleteTodo={deleteTodo} />;
      })}
    </table>
  );
};

export default TodoTable;
