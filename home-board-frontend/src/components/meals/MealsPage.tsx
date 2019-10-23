import React, { useState } from "react";
import MealTable from "./MealTable";
import AddMeal from "./AddMeal";
import { Meal } from "./Meal";
import { AppState } from "../../state/reducers";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as mealActions from "../../state/actions/mealActions";

type props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const MealsPage: React.FunctionComponent<props> = props => {
  return (
    <>
      <h1>Meals</h1>
      <MealTable meals={props.meals} />
      <hr />
      <AddMeal addClicked={props.addMeal} />
    </>
  );
};

function mapStateToProps(state: AppState) {
  return {
    meals: state.meals
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    addMeal: bindActionCreators(mealActions.createMeal, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealsPage);
