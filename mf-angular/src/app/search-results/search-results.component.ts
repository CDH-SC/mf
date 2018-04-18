import { Component, OnInit } from '@angular/core';
import { SearchService } from '../_shared/_services/search.service';
import { searchresults } from '../_shared/models/searchresults';
import { Http, Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  searchTerm: string;
  searchResults: searchresults;

  constructor(
    private searchService: SearchService,
    private http: HttpClient,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const searchTerm = this.route.snapshot.paramMap.get('search');
    this.http.get('/api/search/'+searchTerm).subscribe( res2 => {
      this.searchResults = res2["data"];
      console.log(this.searchResults);
    });
    //For expanding the about sections
    var acc = document.getElementsByClassName("accordion");
    var i;

    for(i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }

}
