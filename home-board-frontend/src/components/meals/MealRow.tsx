import React from "react";
import { weekDays } from "../../utils/DateUtils";
import { Meal } from "./Meal";
import DeleteButton from "../common/DeleteButton";

interface Props {
  meal: Meal;
}

const MealRow: React.FunctionComponent<Props> = ({ meal }) => {
  return (
    <tr>
      <td>{weekDays[meal.date.getDay()]}</td>
      <td>{meal.main}</td>
      <td>{meal.side1}</td>
      <td>{meal.side2}</td>
      {false && ( //TODO
        <td>
          <DeleteButton />
        </td>
      )}
    </tr>
  );
};

export default MealRow;
