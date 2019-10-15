import React from "react";
import MealRow from "./MealRow";

function MealsPage() {
  var meals = [
    {
      main: "chicken",
      side1: "rice",
      side2: "asparagus",
      date: new Date()
    },
    {
      main: "pizza",
      side1: "wings",
      side2: "breadsticks",
      date: new Date()
    }
  ];

  return (
    <>
      <h1>Meals</h1>
      <table class="table table-sm">
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
    </>
  );
}

export default MealsPage;
