
export class AuthService {

  private loggedIn = false;

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      resolve(this.loggedIn);
    });
  }
}
