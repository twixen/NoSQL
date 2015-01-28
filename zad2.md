###Zadanie 2 
```
mongoimport -c movies getglue_sample.json
```
Czas wykonania: 1 godzina.

Ilość elementów.
```
db.movies.count()
19831300
```
20 najpopularniejszych seriali. Czas wykonania 3 minuty.
```
db.movies.aggregate(
      { $match: { modelName: "tv_shows"  } },
      { $group: {_id: "$title", count: {$sum: 1} } },
      { $sort: { count: -1 } },
      { $limit: 20 }
)
```
30 najaktywniejszych użytkowników. Czas wykonania 3 minuty.
```
db.movies.aggregate(
    { $group: { _id: "$userId", count: { $sum: 1 } } },
	{ $sort : { count: -1 } },
	{ $limit: 30 }
)
```
Najczęściej polubione filmy. Czas wykonania 3 minuty.
```
db.movies.aggregate(
	{ $match: { modelName: "movies" } },
	{ $match: { action: "Favorited" } },
	{ $group: { _id: "$title", count: { $sum: 1 } } },
	{ $sort : { count: -1 } },
	{ $limit: 10 }
)
```
Najczęściej polubione filmy Spielberga. Czas wykonania 3 minuty.
```
db.movies.aggregate(
      { $match: {director: "steven spielberg"} },
      { $match: {action: "Liked"} },
      { $group: {_id: "$title", count: {$sum: 1} } },
      { $sort: {count: -1} },
      { $limit : 10 }
)
```