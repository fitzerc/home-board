import { firestore } from "firebase";
import IGroceryService from "./IGroceryService";
import { Grocery } from "../../components/groceries/Grocery";
import FirebaseTodoService from "../todos/FirebaseTodoService";

export default class FirebaseGroceryService implements IGroceryService {
  constructor(private db: firestore.Firestore) {}

  addGroceryItem(item: Grocery): Promise<Grocery> {
    return this.db
      .collection("groceries")
      .add(item)
      .then(ref => {
        return new Promise<Grocery>((resolve, reject) => {
          item.id = ref.id;
          resolve(item);
        });
      });
  }

  deleteGroceryItem(item: Grocery): void {
    const groceryRef = this.db.collection("groceries").doc(item.id);
    groceryRef.delete();
  }

  getGroceries(): Promise<Grocery[]> {
    return this.db
      .collection("groceries")
      .get()
      .then(groceries => {
        return new Promise<Grocery[]>((resolve, reject) => {
          resolve(
            groceries.docs.map(item => {
              return {
                id: item.id,
                item: item.data().item,
                itemType: item.data().itemType
              };
            })
          );
        });
      });
  }
}
