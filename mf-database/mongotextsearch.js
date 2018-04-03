conn = new Mongo();
db = conn.getDB("mf");

var search = "trees",
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

cursor = db.diaries.aggregate(pipeline);

while ( cursor.hasNext() ) {
  printjson( cursor.next() );
}
