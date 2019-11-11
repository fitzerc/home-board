import { AuthAction } from "./authActions";
import MockAuthService from "../../services/auth/MockAuthService";
import { Dispatch } from "redux";
import { SIGNON } from "./authActionTypes";
import AuthService from "../../services/auth/AuthService";

const authService = new AuthService();

export function signIn() {
  return function(dispatch: Dispatch<AuthAction>) {
    authService.signIn().then(authenticated => {
      return dispatch(signInSuccess(authenticated));
    });
  };
}

function signInSuccess(authenticated: boolean): AuthAction {
  return { type: SIGNON, payload: authenticated };
}
