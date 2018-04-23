import { NgModule } from '@angular/core';
import {MusicComponent} from '../music/music.component';
import {PostItemComponent} from '../blog/post-item/post-item.component';
import {Routes, RouterModule} from '@angular/router';
import {BlogComponent} from '../blog/blog.component';
import {ErrorHandlingComponent} from '../error-handling/error-handling.component';
import {AuthGuardService} from '../auth/auth-guard.service';
import {LoginComponent} from '../auth/login/login.component';
import {PostCreateComponent} from '../blog/post-create/post-create.component';

const appRoutes: Routes = [
  { path: '', component: BlogComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'login', component: LoginComponent},
  { path: 'music', canActivate: [AuthGuardService], component: MusicComponent},
  { path: 'posts/new', component: PostCreateComponent, canActivate: [AuthGuardService] },
  { path: 'posts/:id', component: PostItemComponent },
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
