import { NgModule } from '@angular/core';
import {MusicComponent} from '../music/music.component';
import {PostItemComponent} from '../blog/post-item/post-item.component';
import {Routes, RouterModule} from '@angular/router';
import {BlogComponent} from '../blog/blog.component';

const appRoutes: Routes = [
  { path: '', component: BlogComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'music', component: MusicComponent},
  { path: 'posts/:id', component: PostItemComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
