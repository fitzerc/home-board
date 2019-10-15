import React from "react";

function MealRow(props) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return (
    <tr>
      <td>{days[props.meal.date.getDay()]}</td>
      <td>{props.meal.main}</td>
      <td>{props.meal.side1}</td>
      <td>{props.meal.side2}</td>
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
