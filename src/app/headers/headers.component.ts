import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  authenticated = false;
  @Input('content') content;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.loggedIn.subscribe((auth: boolean) => {
      this.authenticated = auth;
    });
    this.authService.authenticate();
  }

  logout() {
    this.authService.logout();
  }

  click() {
    this.content.scrollIntoView();
  }
}
