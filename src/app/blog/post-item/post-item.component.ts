import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post.model';
import {ActivatedRoute, Data} from '@angular/router';
import {PostsService} from '../posts.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  post: Post;
  authenticated = false;

  constructor(private route: ActivatedRoute, private router: ActivatedRoute, private postsService: PostsService, private authService: AuthService) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.post = data['post'][0];
    });
    this.postsService.postEdited.subscribe((post: Post) => {
      this.post = post;
    });
    this.authService.loggedIn.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
    this.authService.authenticate();
  }

  delete() {
    this.postsService.deletePost(this.post.postId);
  }

}
