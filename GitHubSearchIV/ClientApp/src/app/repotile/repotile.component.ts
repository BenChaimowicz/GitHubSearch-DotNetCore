import { Component, OnInit, Input } from '@angular/core';

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


  constructor() {
    this.vImgURL = './../../assets/v.png';
    this.repoBookmarked = false;
  }

  ngOnInit() {
  }

  onBookmark() {
    this.repoBookmarked = this.repoBookmarked ? false : true;
  }


}
