import {EventEmitter, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {CognitoUserPool, AuthenticationDetails, CognitoUser, CognitoUserSession} from 'amazon-cognito-identity-js';
import {Observable} from 'rxjs/Observable';

const poolData = {
  UserPoolId: 'eu-west-1_WGED4uEbi',
  ClientId: '27p6o4qqknpucbvdfbeaa23hka'
};

@Injectable()
export class AuthService {

  loggedIn = new EventEmitter<boolean>();
  authenticated = false;

  constructor(private router: Router) {
  }

  login(userName: string, password: string) {
    const authenticationData = {
      Username: userName,
      Password: password,
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userPool = new CognitoUserPool(poolData);
    const userData = {
      Username: userName,
      Pool: userPool
    };

    const cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        this.authenticated = true;
        this.loggedIn.emit(true);
        this.router.navigate(['/']);
      },

      onFailure: function (err) {
        alert(JSON.stringify(err));
      },
    });
  }

  getAuthenticatedUser(): CognitoUser {
    const userPool = new CognitoUserPool(poolData);

    const currentUser = userPool.getCurrentUser();
    return currentUser.getSession((err, session) => {
      if (err) {
        return;
      } else {
        return currentUser;
      }
    });

  }

  logout() {
    this.getAuthenticatedUser().signOut();
    this.authenticated = false;
    this.loggedIn.emit(false);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): Promise<boolean> {
    console.log('isAuthenticated called');
    const user = this.getAuthenticatedUser();
    const obs = Observable.create((observer) => {
      if (!user) {
        observer.next(false);
      } else {
        user.getSession((err, session) => {
          if (err) {
            observer.next(false);
          } else {
            if (session.isValid()) {
              observer.next(true);
            } else {
              observer.next(false);
            }
          }
        });
      }
      observer.complete();
    });
    return obs;
  }

  initAuth() {
    this.isAuthenticated().then(
      (auth: boolean) => {
        this.loggedIn.next(auth);
      });
  }
}
