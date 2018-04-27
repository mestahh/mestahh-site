import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostsService} from '../posts.service';
import {Post} from '../post.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    console.log('initiated');
  }

  create(form: NgForm) {
    const post = new Post(123, form.value.title, form.value.content, 'mestahh', new Date().toDateString());
    this.postsService.create(post);
    this.router.navigate(['/']);
  }
}
