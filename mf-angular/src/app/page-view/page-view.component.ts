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
  page : Number;
  folio_num: String;
  page = 1;
  totalPages = 25;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/diaries/18').subscribe(data => {
      this.diary = data["data"];
      console.log(this.diary)
    })
  }

  onClick(jump) {
    jump.value;
    var x = jump;
    var pgNum = 0;
    this.folio_num = jump;

    //Checking index of V or R and slicing string to extract pgNum
    if(jump.indexOf('v') == 1 || jump.indexOf('r') == 1) {
      pgNum = parseInt(jump.slice(0,1));
    } else if(jump.indexOf('v') == 2 || jump.indexOf('r') == 2) {
      pgNum = parseInt(jump.slice(0,2));
    } else {
      alert("Please insert a valid folio number. In format <Num><r/v>");
    }

    if(jump.includes('v') && pgNum > 2){
      pgNum = pgNum + 2;
    } else if(jump.includes('r') && pgNum > 2){
      pgNum = pgNum + 1;
    } else if(jump.includes('v') && pgNum == 2){
      pgNum = pgNum + 1;
    } else if(jump.includes('r') && pgNum == 2){
      pgNum = pgNum;
    } else {
      pgNum = 1;
    }

    console.log(jump);
    console.log(pgNum);
    this.page = pgNum;
  }

}
