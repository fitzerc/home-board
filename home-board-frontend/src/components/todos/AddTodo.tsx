import React, { useState, ChangeEvent, FormEvent } from "react";
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

  function addBtnClicked(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addClicked({
      item: newTodo,
      doDate: newDate.toDateString()
    });
    setNewTodo("");
    setNewDate(new Date());
    (document.getElementById("input") as HTMLInputElement).value = "";
  }

  return (
    <form onSubmit={e => addBtnClicked(e)}>
      <div className="input-group mb-3">
        <input
          type="text"
          id="input"
          className="form-control"
          placeholder="Todo Item"
          aria-label="Todo Item"
          onChange={updateNewTodo}
        ></input>
        <DatePicker
          onChange={date => setNewDate(date as Date)}
          value={newDate}
        />
        <div className="input-group-append">
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
