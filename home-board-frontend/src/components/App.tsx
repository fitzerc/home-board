import React from "react";
import HomePage from "./HomePage";
import MealsPage from "./meals/MealsPage";
import GroceryPage from "./groceries/GroceryPage";
import TodoPage from "./todos/TodoPage";
import Header from "./common/Header";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/meals" component={MealsPage} />
      <Route path="/groceries" component={GroceryPage} />
      <Route path="/todos" component={TodoPage} />
    </div>
  );
}

export default App;
