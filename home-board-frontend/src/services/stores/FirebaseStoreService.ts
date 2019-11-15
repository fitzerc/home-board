import IStoreService from "./IStoreService";
import { firestore } from "firebase";
import Store from "../../components/groceries/Store";

export default class FirebaseStoreService implements IStoreService {
  public constructor(private db: firestore.Firestore) {}

  getStores(): Promise<Store[]> {
    return this.db
      .collection("stores")
      .get()
      .then(stores => {
        return new Promise<Store[]>((resolve, reject) => {
          resolve(
            stores.docs.map(store => {
              return {
                id: store.id,
                name: store.data().name
              };
            })
          );
        });
      });
  }
}
