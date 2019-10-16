import React from "react";
import MealTable from "./MealTable";

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
      <MealTable meals={meals} />
    </>
  );
}

export default MealsPage;
