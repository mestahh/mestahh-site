import {Component, OnInit, ViewChild} from '@angular/core';
import {Post} from '../post.model';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  post: Post;
  title: string;
  content: string;

  @ViewChild('f') editForm: NgForm;

  constructor(private route: ActivatedRoute, private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.post = data['post'][0];
      this.title = this.post.title;
      this.content = this.post.body;
    });
  }

  edit(form: NgForm) {
    console.log('edit');
    const post = new Post(this.post.postId, form.value.title, form.value.content, 'mestahh', this.post.createdAt);
    this.postsService.edit(post);
    this.router.navigate(['/posts', this.post.postId]);
  }

}
