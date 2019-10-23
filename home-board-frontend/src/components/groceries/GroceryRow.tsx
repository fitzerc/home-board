import React from "react";
import { Grocery } from "./Grocery";
import DeleteButton from "../common/DeleteButton";

interface Props {
  item: Grocery;
  deleteItem: (item: Grocery) => void;
}

const GroceryRow: React.FunctionComponent<Props> = ({ item, deleteItem }) => {
  function deleteClicked() {
    deleteItem(item);
  }

  return (
    <tbody>
      <tr>
        <td>{item.item}</td>
        <td>{item.itemType}</td>
        {
          <td>
            <DeleteButton deleteClicked={deleteClicked} />
          </td>
        }
      </tr>
    </tbody>
  );
};

export default GroceryRow;
