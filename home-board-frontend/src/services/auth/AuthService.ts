import { auth } from "firebase";
import { EventEmitter } from "events";
import BaseAuthService from "./BaseAuthService";

export default class AuthService extends BaseAuthService {
  constructor() {
    super();
  }

  public authStateChanged = new EventEmitter();

  signIn(): Promise<boolean> {
    const user = auth()
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        //var token = result.credential.accessToken;
        // The signed-in user info.
        return result.user;
        // ...
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

    return new Promise<boolean>((resolve, reject) => {
      resolve(user != null);
    });
  }

  signOut(): Promise<boolean> {
    return auth()
      .signOut()
      .then(function() {
        return new Promise<boolean>((resolve, reject) => {
          resolve(false);
        });
      });
  }

  getCurrentUser() {
    auth().onAuthStateChanged(user => {
      if (user) {
        this.authStateChanged.emit("auth", true);
      }

      this.authStateChanged.emit("auth", false);
    });
  }
}
