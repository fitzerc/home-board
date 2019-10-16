import React, { useState, ChangeEvent } from "react";
import { Todo } from "./Todo";

interface Props {
  addClicked: (todo: Todo) => void;
}

const AddTodo: React.FunctionComponent<Props> = ({ addClicked }) => {
  const [newTodo, setNewTodo] = useState<Todo>({ item: "" });

  function updateNewTodo(e: ChangeEvent): void {
    setNewTodo({ item: (e.target as HTMLInputElement).value });
  }

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Todo Item"
        aria-label="Todo Item"
        onChange={updateNewTodo}
      ></input>
      <div className="input-group-append">
        <button
          type="submit"
          className="button"
          onClick={() => addClicked(newTodo)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
