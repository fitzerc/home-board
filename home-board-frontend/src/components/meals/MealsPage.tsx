import React, { useState } from "react";
import MealTable from "./MealTable";
import AddMeal from "./AddMeal";
import { Meal } from "./Meal";

function MealsPage() {
  const [meals, addToMeals] = useState<Meal[]>([
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
  ]);

  function addMeal(meal: Meal) {
    console.log(meal.main);
    addToMeals([...meals, meal]);
  }

  return (
    <>
      <h1>Meals</h1>
      <MealTable meals={meals} />
      <hr />
      <AddMeal addClicked={addMeal} />
    </>
  );
}

export default MealsPage;
