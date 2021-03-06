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
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import {AuthService} from './auth/auth.service';
import {AuthGuardService} from './auth/auth-guard.service';
import { LoginComponent } from './auth/login/login.component';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { PostCreateComponent } from './blog/post-create/post-create.component';
import {PostItemResolver} from './blog/post-item/post-item.resolver';
import { PostEditComponent } from './blog/post-edit/post-edit.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { MusicService } from './services/music.service';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    PostListComponent,
    PostItemComponent,
    SidebarComponent,
    BlogComponent,
    MusicComponent,
    PostPreviewComponent,
    ErrorHandlingComponent,
    LoginComponent,
    PostCreateComponent,
    PostEditComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [PostsService, AuthService, AuthGuardService, PostItemResolver, MusicService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
