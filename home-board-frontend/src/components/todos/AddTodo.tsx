import React, { useState } from "react";

interface Props {
  addClicked: (todo: string) => void;
}

const AddTodo: React.FunctionComponent<Props> = ({ addClicked }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Todo Item"
        aria-label="Todo Item"
        onChange={e => setNewTodo((e.target as HTMLInputElement).value)}
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
