import React, { useEffect } from "react";
import GroceryTable from "./GroceryTable";
import AddGroceryItem from "./AddGroceryItem";
import { AppState } from "../../state";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreator from "../../state/groceries/groceryActionCreators";
import { Grocery } from "./Grocery";

type props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const GroceryPage: React.FunctionComponent<props> = props => {
  useEffect(() => {
    props.getGroceries();
  }, []);

  function addGroceryItem(item: Grocery) {
    if (!props.authenticated) {
      alert("must be signed in");
      return;
    }

    props.addGroceryItem(item);
  }

  function deleteGroceryItem(item: Grocery) {
    if (!props.authenticated) {
      alert("must be signed in");
      return;
    }

    props.deleteGroceryItem(item);
  }

  return (
    <>
      <h1>Grocery List</h1>
      <GroceryTable
        groceryItems={props.groceries}
        deleteItem={deleteGroceryItem}
      />
      <hr />
      <AddGroceryItem addClicked={addGroceryItem} />
    </>
  );
};

function mapStateToProps(state: AppState) {
  return {
    groceries: state.groceries,
    authenticated: state.authenticated
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
