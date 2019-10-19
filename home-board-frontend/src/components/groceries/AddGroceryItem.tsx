import React, { useState, ChangeEvent } from "react";
import { Grocery } from "./Grocery";

interface Props {
  addClicked: (item: Grocery) => void;
}

const AddGroceryItem: React.FunctionComponent<Props> = ({ addClicked }) => {
  const [newItem, setNewItem] = useState("");
  const [newItemType, setNewItemType] = useState("");

  function updateNewItem(e: ChangeEvent) {
    setNewItem((e.target as HTMLInputElement).value);
  }

  function updateNewItemType(e: ChangeEvent) {
    setNewItemType((e.target as HTMLInputElement).value);
  }

  function addBtnClicked() {
    addClicked({
      item: newItem,
      itemType: newItemType
    });
  }

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Grocery Item"
        aria-label="Grocery Item"
        onChange={updateNewItem}
      ></input>
      <input
        type="text"
        className="form-control"
        placeholder="Grocery Item Type"
        aria-label="Grocery Item Type"
        onChange={updateNewItemType}
      ></input>
      <div className="input-group-append">
        <button type="submit" className="button" onClick={addBtnClicked}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddGroceryItem;
