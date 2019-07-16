import { AuthenticationService } from "./authentication.service";
import { UserLogin } from "./../../shared/models/userLogin";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  error;
  userLogin: UserLogin = {
    username: "",
    password: ""
  };
  isLoginMode = true;
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    if (!this.isLoginMode) {
      this.authService.signup(email, password).subscribe(resData => {
        console.log('1'+resData);
      });
    } else {
      this.authService.login(email, password).subscribe(resData => {
        console.log('2'+resData);
      });
    }

    form.reset();
  }

  continueAsGuest() {
    this.router.navigate(["/"]);
  }
}
