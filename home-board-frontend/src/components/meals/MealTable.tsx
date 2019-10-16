import React from "react";
import { Meal } from "./Meal";
import MealRow from "./MealRow";

interface Props {
  meals: Meal[];
}

const MealTable: React.FunctionComponent<Props> = ({ meals }) => {
  return (
    <table className="table table-sm">
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Main</th>
        <th scope="col">Side</th>
        <th scope="col">Side</th>
      </tr>
      {meals.map(meal => {
        return <MealRow meal={meal} />;
      })}
    </table>
  );
};

export default MealTable;
