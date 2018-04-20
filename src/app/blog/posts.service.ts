import {Injectable } from '@angular/core';
import {Post} from './post.model';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class PostsService {

  posts: Subject<Post[]> = new Subject<Post[]>();
  storedPosts: Post[] = [];

  constructor(private http: HttpClient) {
    this.loadPosts();
  }

  loadPosts() {
    console.log('loading posts');
    this.http.get('https://q3ycamx9j2.execute-api.eu-west-1.amazonaws.com/dev/posts', {
      // headers: new Headers({'Authorization': session.getIdToken().getJwtToken()})
    }).subscribe(
      (data: Post[]) => {
        console.log(data);
        this.storedPosts = data;
        this.posts.next(data);
        console.log('posts are loaded');
      },
      (error) => {
        console.log(error);
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
