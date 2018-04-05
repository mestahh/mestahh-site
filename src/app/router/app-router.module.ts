import { NgModule } from '@angular/core';
import {MusicComponent} from '../music/music.component';
import {PostItemComponent} from '../blog/post-item/post-item.component';
import {Routes, RouterModule} from '@angular/router';
import {BlogComponent} from '../blog/blog.component';
import {ErrorHandlingComponent} from '../error-handling/error-handling.component';
import {AuthGuardService} from '../auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: BlogComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'music', component: MusicComponent},
  { path: 'posts/:id', canActivate: [AuthGuardService], component: PostItemComponent },
  { path: 'error', component: ErrorHandlingComponent},
  { path: '**', redirectTo: '/error'}
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
