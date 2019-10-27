import React from "react";
import MealTable from "./MealTable";
import AddMeal from "./AddMeal";
import { AppState } from "../../state";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as mealActions from "../../state/meals/mealActions";

type props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const MealsPage: React.FunctionComponent<props> = props => {
  return (
    <>
      <h1>Meals</h1>
      <MealTable meals={props.meals} deleteMeal={props.deleteMeal} />
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
    addMeal: bindActionCreators(mealActions.createMeal, dispatch),
    deleteMeal: bindActionCreators(mealActions.deleteMeal, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealsPage);
