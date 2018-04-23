import {Injectable } from '@angular/core';
import {Post} from './post.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';
import {AuthService} from '../auth/auth.service';
import {CognitoUserSession} from 'amazon-cognito-identity-js';

@Injectable()
export class PostsService {

  posts: Subject<Post[]> = new Subject<Post[]>();
  storedPosts: Post[] = [];

  constructor(private http: HttpClient, private authService: AuthService) {
    this.loadPosts();
  }

  loadPosts() {
    this.http.get('https://q3ycamx9j2.execute-api.eu-west-1.amazonaws.com/dev/posts').subscribe(
      (data: Post[]) => {
        console.log(data);
        this.storedPosts = data;
        this.storedPosts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        this.posts.next(data);
        console.log('posts are loaded');
      },
      (error) => {
        console.log(error);
      });
  }

  create(post: Post) {
    this.authService.getAuthenticatedUser().getSession((err, session) => {
      this.http.post('https://q3ycamx9j2.execute-api.eu-west-1.amazonaws.com/dev/posts', post, {
        headers: new HttpHeaders({'Authorization': session.getIdToken().getJwtToken()})
      }).subscribe(
        () => { this.loadPosts();
        },
        (error) => {
          console.log(error);
        });
    });

  }

  getPosts() {
    return this.storedPosts;
  }

  getPost(postId: number) {
    return this.storedPosts.find((x: Post) => {
      return +x.id === postId;
    });
  }
}
