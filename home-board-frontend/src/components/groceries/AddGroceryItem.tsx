import React, { useState, ChangeEvent, FormEvent } from "react";
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

  function addBtnClicked(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addClicked({
      item: newItem,
      itemType: newItemType
    });
    setNewItem("");
    setNewItemType("");
    (document.getElementById("item") as HTMLInputElement).value = "";
    (document.getElementById("itemType") as HTMLInputElement).value = "";
  }

  return (
    <form onSubmit={e => addBtnClicked(e)}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          id="item"
          placeholder="Grocery Item"
          aria-label="Grocery Item"
          onChange={updateNewItem}
        ></input>
        <input
          type="text"
          className="form-control"
          id="itemType"
          placeholder="Grocery Item Type"
          aria-label="Grocery Item Type"
          onChange={updateNewItemType}
        ></input>
        <div className="input-group-append">
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddGroceryItem;
