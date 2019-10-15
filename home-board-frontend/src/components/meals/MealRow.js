import React from "react";
import { weekDays } from "../common/DateUtils";

function MealRow(props) {
  var meal = props.meal;

  return (
    <tr>
      <td>{weekDays[meal.date.getDay()]}</td>
      <td>{meal.main}</td>
      <td>{meal.side1}</td>
      <td>{meal.side2}</td>
      {false && ( //replace when functionality added
        <td>
          <button type="button" class="close">
            <span aria-hidden="true">&times;</span>
          </button>
        </td>
      )}
    </tr>
  );
}

export default MealRow;
