import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
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

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.http.get('/api/diaries/'+id).subscribe(data => {
      this.diary = data["data"];
    })
  }

  onClick(jump) {
    jump.value;
    var x = jump;
    this.page = jump;
  }
}
