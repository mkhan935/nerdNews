import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {News} from '@app/_models/news';
import {Observable} from 'rxjs';
import {NewServiceService} from '@app/new-service.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  mArticles:Array<any> =[];

  constructor(private api: NewServiceService) { }

  ngOnInit() {

  }

  getOne(){
    this.api.getArticle().subscribe(data => this.mArticles.push(data));
    console.log(this.mArticles.length);
    console.log(this.mArticles);
  }

}
