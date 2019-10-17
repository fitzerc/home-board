import React, { useState, ChangeEvent } from "react";
import { Meal } from "./Meal";
import DatePicker from "react-date-picker";

interface Props {
  addClicked: (meal: Meal) => void;
}

const AddMeal: React.FunctionComponent<Props> = ({ addClicked }) => {
  const [newMain, setNewMain] = useState("");
  const [newSide1, setNewSide1] = useState("");
  const [newSide2, setNewSide2] = useState("");
  const [newDate, setNewDate] = useState(new Date());

  function updateNewMain(e: ChangeEvent): void {
    setNewMain((e.target as HTMLInputElement).value);
  }

  function updateNewSide1(e: ChangeEvent): void {
    setNewSide1((e.target as HTMLInputElement).value);
  }

  function updateNewSide2(e: ChangeEvent): void {
    setNewSide2((e.target as HTMLInputElement).value);
  }

  function updateNewDate(date: any): void {
    //setNewMain((e.target as HTMLInputElement).value);
    setNewDate(date);
  }

  function addMealClicked() {
    addClicked({
      main: newMain,
      side1: newSide1,
      side2: newSide2,
      date: newDate
    });
  }

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Main"
        aria-label="Main"
        onChange={updateNewMain}
      ></input>
      <input
        type="text"
        className="form-control"
        placeholder="Side"
        aria-label="Side"
        onChange={updateNewSide1}
      ></input>
      <input
        type="text"
        className="form-control"
        placeholder="Side"
        aria-label="Side"
        onChange={updateNewSide2}
      ></input>
      <DatePicker onChange={date => updateNewDate(date)} value={newDate} />
      <div className="input-group-append">
        <button type="submit" className="button" onClick={addMealClicked}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddMeal;
