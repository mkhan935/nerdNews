import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  url = 'https://stocknewsapi.com/api/v1?tickers=FB&items=20&fallback=true&token=xntnxfufnpjkxwbgm989sfdwai68hwmihoozsgue'
  api_key = 'd1101edb764246aea12d562d355b2fdd';

  other_test = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d1101edb764246aea12d562d355b2fdd';

  constructor(private http: HttpClient) { }
  getArticle(){
    return this.http.get(this.url);
  }
}
