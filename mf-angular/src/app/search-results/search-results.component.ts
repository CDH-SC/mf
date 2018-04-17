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

  }

}
