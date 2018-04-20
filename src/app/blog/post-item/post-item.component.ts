import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post.model';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  post: Post;

  constructor(private router: ActivatedRoute, private postsService: PostsService) {
  }

  ngOnInit() {
    const postId = this.router.snapshot.params['id'];
    // this.router.params.subscribe((id: number) => {
    //   this.postsService.getPost(+postId)
    // });
    this.post = this.postsService.getPost(+postId);
  }

}
