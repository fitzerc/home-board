import React, { useEffect } from "react";
import MealTable from "./MealTable";
import AddMeal from "./AddMeal";
import { AppState } from "../../state";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../state/meals/mealActionCreator";

type props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const MealsPage: React.FunctionComponent<props> = props => {
  useEffect(() => {
    props.getMeals();
  }, []);

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
    addMeal: bindActionCreators(actionCreators.createMeal, dispatch),
    deleteMeal: bindActionCreators(actionCreators.deleteMeal, dispatch),
    getMeals: bindActionCreators(actionCreators.getMeals, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealsPage);
