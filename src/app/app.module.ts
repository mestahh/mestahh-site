import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeadersComponent} from './headers/headers.component';
import {PostListComponent} from './blog/post-list/post-list.component';
import {PostItemComponent} from './blog/post-item/post-item.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {BlogComponent} from './blog/blog.component';
import {MusicComponent} from './music/music.component';
import {PostsService} from './blog/posts.service';
import {PostPreviewComponent} from './blog/post-preview/post-preview.component';
import {AppRouterModule} from './router/app-router.module';

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
    AppRouterModule,
    BrowserModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
