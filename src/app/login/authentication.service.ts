import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError, BehaviorSubject } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from "./user.model";

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  user = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http
      .post(
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAQ2YcYJhtelGAk3dNi01s-RS9PY0jsMMA",
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      // .pipe(
      //   catchError(this.handleError),
      //   tap(resData => {
      //     this.handleAuthentication(
      //       resData.email,
      //       resData.localId,
      //       resData.idToken,
      //       +resData.expiresIn
      //     );
      //   })
      // );
  }
  login(email: string, password: string) {
    return this.http.post(
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAQ2YcYJhtelGAk3dNi01s-RS9PY0jsMMA",
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );
  }
  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = "An unknown error occurred!";
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case "EMAIL_EXISTS":
        errorMessage =
          "The email address is already in use by another account.";
        break;
      case "OPERATION_NOT_ALLOWED":
        errorMessage = "Password sign-in is disabled for this project.";
        break;
      case "TOO_MANY_ATTEMPTS_TRY_LATER":
        errorMessage =
          "We have blocked all requests from this device due to unusual activity. Try again later.";
        break;
    }
    return throwError(errorMessage);
  }
}
