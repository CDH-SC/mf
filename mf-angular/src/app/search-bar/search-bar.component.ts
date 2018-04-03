import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataService } from '../../services/pageview.service';
import { Diary } from '../_shared/models/diary';
import 'rxjs/add/operator/map'
import { MongoClient, Db } from 'mongodb';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  search: String;
  diary: Diary;

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  searchFunction(search) {
    this.diary.find({$text: {$search: search}}, function (err, results) {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
      }
    });
  }

}
