import React from "react";
import { Todo } from "./Todo";
import DeleteButton from "../common/DeleteButton";
import { weekDays } from "../../utils/DateUtils";

interface Props {
  todo: Todo;
  deleteTodo: (todo: Todo) => void;
}

const TodoRow: React.FunctionComponent<Props> = ({ todo, deleteTodo }) => {
  function deleteClicked() {
    deleteTodo(todo);
  }

  return (
    <tbody>
      <tr>
        <td>{todo.item}</td>
        <td>{todo.doDate.slice(0, -5)}</td>
        {
          <td>
            <DeleteButton deleteClicked={deleteClicked} />
          </td>
        }
      </tr>
    </tbody>
  );
};

export default TodoRow;
