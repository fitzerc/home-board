import React, { useState, ChangeEvent, FormEvent } from "react";
import { Grocery } from "./Grocery";
import Store from "./Store";
import { mapDispatchToProps } from "../todos/TodoPage";

interface Props {
  stores: Store[];
  addClicked: (item: Grocery) => void;
}

const AddGroceryItem: React.FunctionComponent<Props> = ({
  stores,
  addClicked
}) => {
  function addBtnClicked(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const store = (document.getElementById("store") as HTMLSelectElement).value;
    const newItem = document.getElementById("item") as HTMLInputElement;

    addClicked({
      item: newItem.value,
      itemType: store
    });

    newItem.value = "";
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
        ></input>
        <select id="store">
          {stores.map(store => {
            return <option key={store.id}>{store.name}</option>;
          })}
        </select>
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
