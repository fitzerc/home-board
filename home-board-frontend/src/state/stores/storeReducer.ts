import initialState from "../initialState";
import { StoresAction } from "./StoreAction";
import { GET_STORES_SUCCESS } from "./storeActionTypes";

export default function storeReducer(
  state = initialState.stores,
  action: StoresAction
) {
  switch (action.type) {
    case GET_STORES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
