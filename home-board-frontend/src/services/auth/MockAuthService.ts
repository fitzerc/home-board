import { auth } from "../FirestoreDb";

export default class MockAuthService {
  constructor() {}

  signIn(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      console.log("in mock");
      resolve(true);
    });
  }
}
