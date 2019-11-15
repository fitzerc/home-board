import { GetStoreService } from "../../services/ServiceProvider";
import { Dispatch } from "react";
import { StoresAction } from "./StoreAction";
import Store from "../../components/groceries/Store";
import { GET_STORES_SUCCESS } from "./storeActionTypes";

const storeService = GetStoreService();

export function getStores() {
  return function(dispatch: Dispatch<StoresAction>) {
    storeService.getStores().then(stores => {
      return dispatch(getStoresSuccess(stores));
    });
  };
}

function getStoresSuccess(stores: Store[]) {
  return { type: GET_STORES_SUCCESS, payload: stores };
}
