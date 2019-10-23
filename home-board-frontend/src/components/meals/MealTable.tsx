import React from "react";
import { Meal } from "./Meal";
import MealRow from "./MealRow";

interface Props {
  meals: Meal[];
  deleteMeal: (meal: Meal) => void;
}

const MealTable: React.FunctionComponent<Props> = ({ meals, deleteMeal }) => {
  return (
    <table className="table table-sm">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Main</th>
          <th scope="col">Side</th>
          <th scope="col">Side</th>
        </tr>
      </thead>
      {meals.map(meal => {
        return (
          <MealRow key={meal.main} meal={meal} deleteClicked={deleteMeal} />
        );
      })}
    </table>
  );
};

export default MealTable;
