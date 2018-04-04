import { Injectable } from '@angular/core';
import { Diary } from '../models/diary';


@Injectable()
export class SearchService {

  diary: Diary;

  constructor() { }
/*
  search(search) {

    pipeline = [
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

    this.diary.aggregate(pipeline}, function (err, results) {
      if (err) {
        console.log(err);
      } else {
        console.log(JSON.stringify(results));
      }
    });
  }*/
}
