import React from "react";
import { Grocery } from "./Grocery";
import GroceryRow from "./GroceryRow";

interface Props {
  groceryItems: Grocery[];
  deleteItem: (item: Grocery) => void;
}

const GroceryTable: React.FunctionComponent<Props> = ({
  groceryItems,
  deleteItem
}) => {
  return (
    <table className="table table-sm">
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Item Type</th>
        </tr>
      </thead>
      {groceryItems.map(item => {
        return <GroceryRow key={item.id} item={item} deleteItem={deleteItem} />;
      })}
    </table>
  );
};

export default GroceryTable;
