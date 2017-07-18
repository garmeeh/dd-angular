import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const CORS_API: string = 'https://cors-anywhere.herokuapp.com/https://www.donedeal.ie';

@Injectable()
export class AdViewService {
  constructor(private http: Http) {}
  
  getAd(id: number): Observable<any> {
    return this.http
      .get(`${CORS_API}/adview/api/v3/view/ad/${id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }
}