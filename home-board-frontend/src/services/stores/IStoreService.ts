import Store from "../../components/groceries/Store";

export default interface IStoreService {
  getStores(): Promise<Store[]>;
}
