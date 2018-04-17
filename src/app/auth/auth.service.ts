import {EventEmitter, Injectable, Output} from '@angular/core';
import {Router} from '@angular/router';
import {CognitoUserPool, AuthenticationDetails, CognitoUser, CognitoUserSession} from 'amazon-cognito-identity-js';
import {Observable} from 'rxjs/Observable';

const poolData = {
  UserPoolId: 'eu-west-1_WGED4uEbi',
  ClientId: '27p6o4qqknpucbvdfbeaa23hka'
};

@Injectable()
export class AuthService {

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
        this.router.navigate(['/']);
      },

      onFailure: function (err) {
        alert(JSON.stringify(err));
      },
    });
  }

  getAuthenticatedUser(): CognitoUser {
    const userPool = new CognitoUserPool(poolData);
    return userPool.getCurrentUser();
  }

  logout() {
    this.getAuthenticatedUser().signOut();
    this.router.navigate(['/login']);
  }

  isAuthenticated(): Observable<boolean> {
    const user = this.getAuthenticatedUser();
    const obs = Observable.create((observer) => {
      if (!user) {
        observer.next(false);
      } else {
        user.getSession((err, session) => {
          if (err) {
            console.log(err);
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
}
