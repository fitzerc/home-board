import React, { useState, ChangeEvent } from "react";
import { Todo } from "./Todo";
import DatePicker from "react-date-picker";

interface Props {
  addClicked: (todo: Todo) => void;
}

const AddTodo: React.FunctionComponent<Props> = ({ addClicked }) => {
  const [newTodo, setNewTodo] = useState("");
  const [newDate, setNewDate] = useState<Date>(new Date());

  function updateNewTodo(e: ChangeEvent): void {
    setNewTodo((e.target as HTMLInputElement).value);
  }

  function addBtnClicked() {
    addClicked({
      item: newTodo,
      doDate: newDate
    });
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
      <DatePicker onChange={date => setNewDate(date as Date)} value={newDate} />
      <div className="input-group-append">
        <button type="submit" className="button" onClick={addBtnClicked}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
