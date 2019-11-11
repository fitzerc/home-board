export default class MockAuthService {
  constructor() {}

  signIn(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      resolve(true);
    });
  }
}
