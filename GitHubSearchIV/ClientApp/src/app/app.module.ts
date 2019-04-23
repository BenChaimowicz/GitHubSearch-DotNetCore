import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { SearchRepoComponent } from './searchrepo/searchrepo.component';
import { BookmarkedComponent } from './bookmarked/bookmarked.component';
import { RepoSearchService } from './repo-search.service';
import { RepotileComponent } from './repotile/repotile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    SearchRepoComponent,
    BookmarkedComponent,
    RepotileComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'search', component: SearchRepoComponent },
      { path: 'bookmarked', component: BookmarkedComponent },
    ])
  ],
  providers: [RepoSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
