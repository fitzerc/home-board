import React from "react";
import GroceryTable from "./GroceryTable";

var groceryItems = [
  {
    item: "bananas",
    itemType: "perishable"
  },
  {
    item: "frozen peas",
    itemType: "frozen"
  }
];

function GroceryPage() {
  return (
    <>
      <h1>Grocery List</h1>
      <GroceryTable groceryItems={groceryItems} />
    </>
  );
}

export default GroceryPage;
