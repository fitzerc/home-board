import { firestore } from "firebase";

export default class FirebaseTodoService {
  constructor(private db: firestore.Firestore) {}

  getTodos() {
    return this.db
      .collection("home-board")
      .get()
      .then(querySnapshot => {
        return querySnapshot;
      });
  }
}
