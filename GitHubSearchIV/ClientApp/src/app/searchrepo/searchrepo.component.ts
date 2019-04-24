import { Component, OnInit } from '@angular/core';
import { RepoSearchService } from '../repo-search.service';

@Component({
  selector: 'app-searchrepo',
  templateUrl: './searchrepo.component.html',
  styleUrls: ['./searchrepo.component.css']
})
export class SearchRepoComponent implements OnInit {

  searchResults: any[];
  searchString: string;
  isLoaded: boolean;

  length: number;
  pageSize = 100;
  totalPages: number;
  currentPage: number;
  pagesArray: number[];

  constructor(private searchService: RepoSearchService) {
    this.searchResults = [];
    this.isLoaded = false;
  }

  ngOnInit() {
  }

  createPagesArray() {
    this.pagesArray = Array(Math.ceil(this.totalPages));
    for (var i = 0; i < this.pagesArray.length; i++) {
      this.pagesArray[i] = i + 1;
    }
  }

  getAndDisplayRepos(s: string = '') {
    this.searchService.getRepos(this.searchString + s).subscribe(repos => { this.searchResults = repos['items']; },
      error => { console.log(error); },
      () => {
        console.log('Request Complete');
        this.isLoaded = true; console.log(this.searchResults);
        console.log(this.searchResults[0].name + this.searchResults[0].owner.avatar_url);
      });
  }

  onSearch() {
    console.log(this.searchString);
    this.searchService.getRepos(this.searchString).subscribe(l => {
    this.length = l['total_count'];
      this.totalPages = this.length / this.pageSize;
      this.currentPage = 1;
      this.createPagesArray();
    });
    this.getAndDisplayRepos();
  }

  nextPage() {
    if (this.currentPage >= 1) {
      this.currentPage++;
      this.getAndDisplayRepos('&page=' + this.currentPage);
    }
  }

  prevPage() {
    if (this.currentPage <= this.totalPages && this.currentPage > 1) {
      this.currentPage--;
      this.getAndDisplayRepos('&page=' + this.currentPage);
    }
  }

  onPageNum(num: number) {
    this.currentPage = num;
    this.getAndDisplayRepos('&page=' + num);
  }
}
