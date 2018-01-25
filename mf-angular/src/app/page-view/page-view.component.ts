import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.scss'],
//encapsulation: ViewEncapsulation.None
})
export class PageViewComponent implements OnInit {

  diary : String;
  // Default page
  page = 1;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/diaries/18').subscribe(data => {
      this.diary = data["data"];
      console.log(this.diary)
    })
  }

}
