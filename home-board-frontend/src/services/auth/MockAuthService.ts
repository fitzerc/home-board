import { EventEmitter } from "events";
import BaseAuthService from "./BaseAuthService";

export default class MockAuthService extends BaseAuthService {
  constructor() {
    super();
  }

  public authStateChanged = new EventEmitter();

  signIn(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      resolve(true);
    });
  }

  signOut(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      resolve(false);
    });
  }

  getCurrentUser() {
    this.authStateChanged.emit("auth", true);
  }
}
