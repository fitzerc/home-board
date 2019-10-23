import React from "react";
import { weekDays } from "../../utils/DateUtils";
import { Meal } from "./Meal";
import DeleteButton from "../common/DeleteButton";

interface Props {
  meal: Meal;
  deleteClicked: (meal: Meal) => void;
}

const MealRow: React.FunctionComponent<Props> = ({ meal, deleteClicked }) => {
  function deleteMeal() {
    deleteClicked(meal);
  }

  return (
    <tbody>
      <tr>
        <td>{weekDays[meal.date.getDay()]}</td>
        <td>{meal.main}</td>
        <td>{meal.side1}</td>
        <td>{meal.side2}</td>
        {
          <td>
            <DeleteButton deleteClicked={deleteMeal} />
          </td>
        }
      </tr>
    </tbody>
  );
};

export default MealRow;
