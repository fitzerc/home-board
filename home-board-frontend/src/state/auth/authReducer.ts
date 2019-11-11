import initialState from "../initialState";
import { Action } from "redux";
import { SIGNON } from "./authActionTypes";
import { AuthAction } from "./authActions";

export default function authReducer(
  state = initialState.authenticated,
  action: Action
) {
  switch (action.type) {
    case SIGNON:
      return (action as AuthAction).payload;
    default:
      return state;
  }
}
