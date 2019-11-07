import firebase from "firebase";

export const db = firebase.initializeApp({}).firestore();
