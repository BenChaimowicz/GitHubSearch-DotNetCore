import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bookmarked',
  templateUrl: './bookmarked.component.html',
  styleUrls: ['./bookmarked.component.css']
})
export class BookmarkedComponent implements OnInit {

  public bookmarkedList: Repository[];
  private baseURL: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseURL = baseUrl;
    this.getBookmarked();
  }

  ngOnInit() {
  }

  getBookmarked() {
    this.http.get<Repository[]>(this.baseURL + 'api/Session/Bookmarked').subscribe(repos => { this.bookmarkedList = repos }, error => { console.log(error) } );
  }

  removeBookmark() {
    this.bookmarkedList
  }
}

interface Repository {
  id: number;
  name: string;
  avatarURL: string;
  bookmarked: boolean;
}

