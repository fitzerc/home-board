import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "orange" };
  return (
    <nav>
      <NavLink activeStyle={activeStyle} exact to="/">
        Home
      </NavLink>{" "}
      {" | "}{" "}
      <NavLink activeStyle={activeStyle} to="/meals">
        Meals
      </NavLink>{" "}
      {" | "}
      <NavLink activeStyle={activeStyle} to="/groceries">
        Grocery List
      </NavLink>{" "}
      {" | "}
      <NavLink activeStyle={activeStyle} to="/todos">
        Todo List
      </NavLink>
    </nav>
  );
}

export default Header;
