import React, { useState } from "react";
import GroceryTable from "./GroceryTable";
import AddGroceryItem from "./AddGroceryItem";
import { Grocery } from "./Grocery";

function GroceryPage() {
  const [groceryItems, addToList] = useState<Grocery[]>([
    {
      item: "bananas",
      itemType: "perishable"
    },
    {
      item: "frozen peas",
      itemType: "frozen"
    }
  ]);

  function addGroceryItem(item: Grocery) {
    addToList([...groceryItems, item]);
  }

  return (
    <>
      <h1>Grocery List</h1>
      <GroceryTable groceryItems={groceryItems} />
      <hr />
      <AddGroceryItem addClicked={addGroceryItem} />
    </>
  );
}

export default GroceryPage;
