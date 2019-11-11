import { AuthAction } from "./authActions";
import { Dispatch } from "redux";
import { SIGNON } from "./authActionTypes";
import { GetAuthService } from "../../services/ServiceProvider";

const authService = GetAuthService();

export function signIn() {
  return function(dispatch: Dispatch<AuthAction>) {
    authService.signIn().then(authenticated => {
      return dispatch(signInSuccess(authenticated));
    });
  };
}

export function checkCurrentUser() {
  return function(dispatch: Dispatch<AuthAction>) {
    authService.authStateChanged.on("auth", user => {
      return dispatch(signInSuccess(user != null));
    });
  };
}

function signInSuccess(authenticated: boolean): AuthAction {
  return { type: SIGNON, payload: authenticated };
}
