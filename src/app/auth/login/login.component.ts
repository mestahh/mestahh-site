import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('inputUserName') userName: ElementRef;
  @ViewChild('inputPassword') password: ElementRef;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login(this.userName.nativeElement.value, this.password.nativeElement.value);
  }

}
