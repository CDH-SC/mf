import { Component, OnInit } from '@angular/core';
import { SearchService } from '../_shared/_services/search.service';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  searchTerm: string;
  searchResults: any[];

  constructor(
    private searchService: SearchService,
  ) { }

  ngOnInit() {
    var searchTerm = "test";
    this.searchService.search(searchTerm).subscribe( res => {
      this.searchResults = res["data"];
      console.log(res["data"]);
    });
    console.log(this.searchResults);
  }

}
