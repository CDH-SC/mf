import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map'
import { Diary } from '../_shared/models/diary';
import { PagerService } from '../_shared/_services/index';

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.scss'],
//encapsulation: ViewEncapsulation.None
})
export class PageViewComponent implements OnInit {

  diary : Diary;

  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  // Default page
  folio_num: String;
  page = 1;
  pageNum: number;

  constructor(
    private http: HttpClient,
    private pagerService: PagerService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const pageNum = this.route.snapshot.paramMap.get('pageNum');
    console.log(pageNum);
    this.http.get('/api/diaries/'+id).subscribe(data => {
      this.diary = data["data"];
      this.allItems = data["data"]["page"];

      // initialize page to 1
      this.setPage(+pageNum);
      console.log(data["data"]["page"][56].folio_num);
    });

  }

  setPage(page: number) {
      if (page < 1 || page > this.pager.totalPages) {
          return;
      }

      // get pager object from service
      this.pager = this.pagerService.getPager(this.allItems.length, page);
      this.page = this.pager.currentPage;
  }

  onClick(jump) {

    var i;
    for(i = 0; i < this.allItems.length; i++) {
      console.log(this.allItems[i].folio_num);
      if(jump == this.allItems[i].folio_num) {
        this.setPage(i+1);
        break;
      }
    }

  }

  goToGroup(group) {
    var x = group+1;
    this.setPage(x);
    console.log(x);
  }



}
