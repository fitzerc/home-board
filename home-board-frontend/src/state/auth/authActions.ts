import { Action } from "redux";

export interface AuthAction extends Action {
  type: string;
  payload: boolean;
}
