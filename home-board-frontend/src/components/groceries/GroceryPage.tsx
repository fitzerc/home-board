import React from "react";
import GroceryTable from "./GroceryTable";
import AddGroceryItem from "./AddGroceryItem";
import { AppState } from "../../state/reducers";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as groceryActions from "../../state/actions/groceryActions";

type props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const GroceryPage: React.FunctionComponent<props> = props => {
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
    addGroceryItem: bindActionCreators(groceryActions.createGrocery, dispatch),
    deleteGroceryItem: bindActionCreators(
      groceryActions.deleteGrocery,
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryPage);
