import firebase from "firebase";

const fb = firebase.initializeApp({
  apiKey: "AIzaSyBQ79vaZ1pB2aXanxVdRa3Uoi1XDk-HRy8",
  authDomain: "home-board-d6ef8.firebaseapp.com",
  projectId: "home-board-d6ef8"
});
export const db = fb.firestore();

export function getUser() {
  const user = fb.auth().currentUser;
  console.log(user);
  return user;
}

export function signin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  fb.auth()
    .signInWithPopup(provider)
    .then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
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
}
