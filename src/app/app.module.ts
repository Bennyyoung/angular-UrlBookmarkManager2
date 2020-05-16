import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxWebstorageModule } from 'ngx-webstorage'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { BookmarksService } from './services/bookmarks.service';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { BookmarkpostComponent } from './components/bookmarkpost/bookmarkpost.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [BrowserModule, RouterModule, FormsModule, HttpClientModule, DragDropModule, NgxWebstorageModule.forRoot(), Ng2SearchPipeModule],
  declarations: [AppComponent, NavbarComponent, BookmarksComponent, BookmarkpostComponent],
  providers: [BookmarksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
