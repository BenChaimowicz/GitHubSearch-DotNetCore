import { Component, OnInit, Input, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-repotile',
  templateUrl: './repotile.component.html',
  styleUrls: ['./repotile.component.css']
})
export class RepotileComponent implements OnInit {

  @Input() repoID: number;
  @Input() repoName: string;
  @Input() repoAvatar: string;
  repoBookmarked: boolean;
  vImgURL: string;
  baseURL: string;


  constructor(private http: HttpClient, @Inject('BASE_URL') baseURL: string) {
    this.vImgURL = './../../assets/v.png';
    this.repoBookmarked = false;
    this.baseURL = baseURL;
  }

  ngOnInit() {
  }

  onBookmark() {
    this.repoBookmarked = this.repoBookmarked ? false : true;
    if (this.repoBookmarked) {
      this.http.get(this.baseURL + 'api/session/setsession/' + this.repoName).subscribe
    }
  }


}
