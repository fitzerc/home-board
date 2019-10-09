import React from "react";
import HomePage from "./HomePage";
import MealsPage from "./MealsPage";
import GroceryPage from "./GroceryPage";
import TodoPage from "./TodoPage";
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
