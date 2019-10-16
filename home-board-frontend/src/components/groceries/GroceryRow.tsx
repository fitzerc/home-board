import React from "react";
import { Grocery } from "./Grocery";
import DeleteButton from "../common/DeleteButton";

interface Props {
  item: Grocery;
}

const GroceryRow: React.FunctionComponent<Props> = ({ item }) => {
  return (
    <tr>
      <td>{item.item}</td>
      <td>{item.itemType}</td>
      {false && ( //TODO
        <td>
          <DeleteButton />
        </td>
      )}
    </tr>
  );
};

export default GroceryRow;
