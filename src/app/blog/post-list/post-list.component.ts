import {Component, OnInit} from '@angular/core';
import {Post} from '../post.model';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    this.postsService.loadPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
    this.postsService.postCreated.subscribe((post: Post) => {
      this.posts.push(post);
    });
  }
}
