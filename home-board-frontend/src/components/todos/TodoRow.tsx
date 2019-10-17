import React from "react";
import { Todo } from "./Todo";
import DeleteButton from "../common/DeleteButton";
import { weekDays } from "../../utils/DateUtils";

interface Props {
  todo: Todo;
}

const TodoRow: React.FunctionComponent<Props> = ({ todo }) => {
  return (
    <tbody>
      <tr>
        <td>{todo.item}</td>
        <td>{weekDays[todo.doDate.getDay()]}</td>
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
