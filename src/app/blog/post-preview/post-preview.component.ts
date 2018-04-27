import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post.model';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent implements OnInit {

  @Input() post: Post;
  authenticated = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.loggedIn.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
    this.authService.authenticate();
  }

}
