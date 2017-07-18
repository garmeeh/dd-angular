import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// Interface

const CORS_API: string = 'https://cors-anywhere.herokuapp.com/https://www.donedeal.ie';

@Injectable()
export class SearchViewService {
  constructor(private http: Http) {}
  
  getAds(query?: any): Observable<any> {
    const params: any = Object.assign({}, {
      sort: 'relevance desc',
      max: 30,
      section: 'all',
      start: 0,
    }, query);
    return this.http
      .post(`${CORS_API}/search/api/v4/find/`, params)
      .map((response: Response) => response.json().ads)
      .catch((error: any) => Observable.throw(error.json()));
  }

  getSections(): Observable<any> {
    return this.http
      .get(`${CORS_API}/search/api/v2/sections/`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }
}