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

const appRoutes: Routes = [
  { path: '', component: BlogComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'music', component: MusicComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    PostListComponent,
    PostItemComponent,
    SidebarComponent,
    BlogComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
