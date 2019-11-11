import { auth } from "firebase";

export default class AuthService {
  constructor() {}

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

  getCurrentUser() {
    return auth().currentUser;
  }
}
