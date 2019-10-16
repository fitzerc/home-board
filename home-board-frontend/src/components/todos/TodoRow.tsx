import React from "react";
import { Todo } from "./Todo";
import DeleteButton from "../common/DeleteButton";

interface Props {
  todo: Todo;
}

const TodoRow: React.FunctionComponent<Props> = ({ todo }) => {
  return (
    <tbody>
      <tr>
        <td>{todo.item}</td>
        {false && ( //TODO
          <td>
            <DeleteButton />
          </td>
        )}
      </tr>
    </tbody>
  );
};

export default TodoRow;
