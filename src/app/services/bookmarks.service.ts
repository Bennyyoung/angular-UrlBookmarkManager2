import { Injectable } from '@angular/core';
import { Bookmark } from './../models/Bookmark';
import { LocalStorageService } from "ngx-webstorage";

@Injectable({
  providedIn: 'root',
})
export class BookmarksService {
  bookmarks: Bookmark[];
  bookmark: Bookmark = {
    name: '',
    label: '',
    url: '',
  };
  favourites: Bookmark[];

  constructor(private localSt:LocalStorageService) {
      this.bookmarks = []
      this.favourites = [];
      console.log(this.bookmarks);
      JSON.stringify(this.bookmark)
      this.localSt.store('bookmarks', JSON.stringify(this.bookmark))
      this.localSt.retrieve('bookmarks')
  }

  getBookmark(): Bookmark[] {
    return this.bookmarks;
  }

  addBookmark(bookmark: Bookmark) {
    this.bookmarks.unshift(bookmark);
    
  }

  updateBookmark(bookmark: Bookmark) {
    return this.bookmarks;
  }
}
