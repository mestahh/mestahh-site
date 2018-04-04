import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { PostListComponent } from './blog/post-list/post-list.component';
import { PostItemComponent } from './blog/post-item/post-item.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BlogComponent } from './blog/blog.component';
import {Router, RouterModule, Routes} from '@angular/router';
import { MusicComponent } from './music/music.component';
import {PostsService} from './blog/posts.service';
import { PostPreviewComponent } from './blog/post-preview/post-preview.component';

const appRoutes: Routes = [
  { path: '', component: BlogComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'music', component: MusicComponent},
  { path: 'posts/:id', component: PostItemComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    PostListComponent,
    PostItemComponent,
    SidebarComponent,
    BlogComponent,
    MusicComponent,
    PostPreviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
