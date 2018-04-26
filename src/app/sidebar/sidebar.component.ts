import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  authenticated = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.loggedIn.subscribe((auth: boolean) => {
      this.authenticated = auth;
    });
    this.authService.authenticate();
  }
}
