import {Injectable } from '@angular/core';
import {Post} from './post.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';
import {AuthService} from '../auth/auth.service';
import {CognitoUserSession} from 'amazon-cognito-identity-js';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostsService {

  postCreated: Subject<Post> = new Subject<Post>();
  postEdited: Subject<Post> = new Subject<Post>();

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  loadPosts() {
    return this.http.get('https://q3ycamx9j2.execute-api.eu-west-1.amazonaws.com/dev/posts');
  }

  create(post: Post) {
    this.authService.getAuthenticatedUser().getSession((err, session) => {
      this.http.post('https://q3ycamx9j2.execute-api.eu-west-1.amazonaws.com/dev/posts', post, {
        headers: new HttpHeaders({'Authorization': session.getIdToken().getJwtToken()})
      }).subscribe(
        () => { this.postCreated.next(post); },
        (error) => {
          console.log(error);
        });
    });

  }

  edit(post: Post) {
    this.authService.getAuthenticatedUser().getSession((err, session) => {
      this.http.put('https://q3ycamx9j2.execute-api.eu-west-1.amazonaws.com/dev/posts/' + post.postId, post, {
        headers: new HttpHeaders({'Authorization': session.getIdToken().getJwtToken()})
      }).subscribe(
        () => { this.postEdited.next(post); },
        (error) => {
          console.log(error);
        });
    });

  }

  getPost(postId: number): Observable<any> {
    return this.http.get('https://q3ycamx9j2.execute-api.eu-west-1.amazonaws.com/dev/posts/' + postId);
  }

  deletePost(postId: number) {
    console.log('delete ' + postId);
  }
}
