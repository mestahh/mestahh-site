import { NgModule } from '@angular/core';
import {MusicComponent} from '../music/music.component';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: MusicComponent},
  // { path: 'blog', component: BlogComponent},
  // { path: 'about', component: AboutComponent},
  // { path: 'login', component: LoginComponent},
  { path: 'music', component: MusicComponent},
  // { path: 'posts/new', component: PostCreateComponent, canActivate: [AuthGuardService] },
  // { path: 'posts/edit/:id', component: PostEditComponent, canActivate: [AuthGuardService], resolve: { post: PostItemResolver } },
  // { path: 'posts/:id', component: PostItemComponent, resolve: { post: PostItemResolver }},
  // { path: 'error', component: ErrorHandlingComponent},
  { path: '**', redirectTo: '/'}
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
