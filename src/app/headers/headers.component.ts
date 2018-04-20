import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  authenticated = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.initAuth();
    this.authService.loggedIn.subscribe((auth: boolean) => {
      this.authenticated = auth;
    });
  }

  logout() {
    this.authService.logout();
  }

}
