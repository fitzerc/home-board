import { EventEmitter } from "events";

export default abstract class BaseAuthService {
  constructor() {
    this.getCurrentUser();
  }

  authStateChanged = new EventEmitter();
  abstract signIn(): Promise<boolean>;
  abstract signOut(): Promise<boolean>;
  abstract getCurrentUser(): void;
}
