import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./state/configureStore";
import { Provider } from "react-redux";
import { getTodos } from "./state/todos/todoActionCreators";
import { getMeals } from "./state/meals/mealActionCreator";
import { getGroceries } from "./state/groceries/groceryActionCreators";

const store = configureStore();
store.dispatch(getTodos());
store.dispatch(getMeals());
store.dispatch(getGroceries());

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
