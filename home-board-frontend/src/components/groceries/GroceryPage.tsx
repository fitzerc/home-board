import React, { useEffect } from "react";
import GroceryTable from "./GroceryTable";
import AddGroceryItem from "./AddGroceryItem";
import { AppState } from "../../state";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreator from "../../state/groceries/groceryActionCreators";

type props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const GroceryPage: React.FunctionComponent<props> = props => {
  useEffect(() => {
    props.getGroceries();
  }, []);

  return (
    <>
      <h1>Grocery List</h1>
      <GroceryTable
        groceryItems={props.groceries}
        deleteItem={props.deleteGroceryItem}
      />
      <hr />
      <AddGroceryItem addClicked={props.addGroceryItem} />
    </>
  );
};

function mapStateToProps(state: AppState) {
  return {
    groceries: state.groceries
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    addGroceryItem: bindActionCreators(actionCreator.createGrocery, dispatch),
    deleteGroceryItem: bindActionCreators(
      actionCreator.deleteGrocery,
      dispatch
    ),
    getGroceries: bindActionCreators(actionCreator.getGroceries, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryPage);
