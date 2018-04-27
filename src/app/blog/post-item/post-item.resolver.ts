import {Injectable} from '@angular/core';
import {PostsService} from '../posts.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Post} from '../post.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostItemResolver implements Resolve<Post[]> {

  constructor(private postsService: PostsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> | Promise<Post[]> | Post[]  {
    return this.postsService.getPost(+route.params['id']);
  }
}
