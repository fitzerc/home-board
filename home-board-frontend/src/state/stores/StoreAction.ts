import { Action } from "redux";
import Store from "../../components/groceries/Store";

export interface StoresAction extends Action {
  type: string;
  payload: Store[];
}
