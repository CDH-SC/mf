import { Injectable } from '@angular/core';
import { Diary } from '../models/diary';
import { Http } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable()
export class SearchService {

  diary: Diary;

  constructor(
    private http: HttpClient,
  ) { }


  search(search) {

    var pipeline = [
      {
        $match: {
          $text: { $search: search }
        }
      },
      {
        $unwind: "$page"
      },
      {
        $match: {
          "page.content": {$regex: search, $options: "i"}
        }
      },
      {
        $project: {
          "_id": 0,
          "page.folio_num": 1,
          "page.content": 1
        }
      }
    ];

    this.http.get('/api/search/').subscribe(data => {
      this.search = data["data"];
      console.log(data);
    });
  }
}
