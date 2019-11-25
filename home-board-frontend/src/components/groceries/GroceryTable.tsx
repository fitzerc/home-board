import React, { useState } from "react";
import { Grocery } from "./Grocery";
import GroceryRow from "./GroceryRow";
import Store from "./Store";

interface Props {
  groceryItems: Grocery[];
  stores: Store[];
  deleteItem: (item: Grocery) => void;
}

const GroceryTable: React.FunctionComponent<Props> = ({
  groceryItems,
  stores,
  deleteItem
}) => {
  const [filter, setFilter] = useState("All");

  function onFilterChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setFilter(e.target.value);
  }

  return (
    <>
      <div>
        <label>Filter:</label>
        <select onChange={e => onFilterChange(e)}>
          <option>All</option>
          {stores.map(store => {
            return <option key={store.id}>{store.name}</option>;
          })}
        </select>
      </div>
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Item Type</th>
          </tr>
        </thead>
        {groceryItems.map(item => {
          if (filter === "All" || filter === item.itemType) {
            return (
              <GroceryRow key={item.id} item={item} deleteItem={deleteItem} />
            );
          }
        })}
      </table>
    </>
  );
};

export default GroceryTable;
