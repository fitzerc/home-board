import { AuthAction } from "./authActions";
import MockAuthService from "../../services/auth/MockAuthService";
import { Dispatch } from "redux";
import { SIGNON } from "./authActionTypes";
import AuthService from "../../services/auth/AuthService";
import { getUser } from "../../services/FirestoreDb";
import { auth } from "firebase";

const authService = new AuthService();

export function signIn() {
  return function(dispatch: Dispatch<AuthAction>) {
    authService.signIn().then(authenticated => {
      return dispatch(signInSuccess(authenticated));
    });
  };
}

export function checkCurrentUser() {
  return function(dispatch: Dispatch<AuthAction>) {
    auth().onAuthStateChanged(function(user) {
      if (user) {
        return dispatch(signInSuccess(true));
      } else {
        return dispatch(signInSuccess(false));
      }
    });
  };
}

function signInSuccess(authenticated: boolean): AuthAction {
  return { type: SIGNON, payload: authenticated };
}
