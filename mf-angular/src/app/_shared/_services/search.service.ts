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


  search(search: string) {
    console.log(search);

    this.http.get('/api/search/'+search).subscribe(data => {
      this.search = data["data"];
      console.log(data);
    });
  }
}
