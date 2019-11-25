import React, { useEffect } from "react";
import GroceryTable from "./GroceryTable";
import AddGroceryItem from "./AddGroceryItem";
import { AppState } from "../../state";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreator from "../../state/groceries/groceryActionCreators";
import * as storeActionCreator from "../../state/stores/storeActionCreators";
import { Grocery } from "./Grocery";

type props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const GroceryPage: React.FunctionComponent<props> = props => {
  useEffect(() => {
    props.getGroceries();
    props.getStores();
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
      <h1>Shopping List</h1>
      <GroceryTable
        groceryItems={props.groceries}
        stores={props.stores}
        deleteItem={deleteGroceryItem}
      />
      <hr />
      <AddGroceryItem stores={props.stores} addClicked={addGroceryItem} />
    </>
  );
};

function mapStateToProps(state: AppState) {
  return {
    groceries: state.groceries,
    authenticated: state.authenticated,
    stores: state.stores
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    addGroceryItem: bindActionCreators(actionCreator.createGrocery, dispatch),
    deleteGroceryItem: bindActionCreators(
      actionCreator.deleteGrocery,
      dispatch
    ),
    getGroceries: bindActionCreators(actionCreator.getGroceries, dispatch),
    getStores: bindActionCreators(storeActionCreator.getStores, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryPage);
