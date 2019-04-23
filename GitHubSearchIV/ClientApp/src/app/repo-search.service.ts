import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RepoSearchService {

  private path = 'https://api.github.com/search/repositories?q=';

  constructor(private http: HttpClient) {
   }

  public getRepos(search: string): Observable<any[]> {
    return this.http.get<any[]>(this.path + search + '&per_page=100');
  }
}
