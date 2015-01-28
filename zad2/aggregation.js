najpopularniejsze filmy albo seriale
db.movies.aggregate(
      { $match: { modelName: "tv_shows"  } },
      { $group: {_id: "$title", count: {$sum: 1} } },
      { $sort: {count: -1} },
      { $limit: 20}
)
Time: 176243ms
{ "_id" : "The Big Bang Theory", "count" : 260686 }
{ "_id" : "Fringe", "count" : 187910 }
{ "_id" : "Nikita", "count" : 150683 }
{ "_id" : "Glee", "count" : 146799 }
{ "_id" : "Supernatural", "count" : 130454 }
{ "_id" : "True Blood", "count" : 122913 }
{ "_id" : "The Walking Dead", "count" : 119369 }
{ "_id" : "The Vampire Diaries", "count" : 118000 }
{ "_id" : "Game of Thrones", "count" : 108548 }
{ "_id" : "Once Upon a Time", "count" : 99515 }
{ "_id" : "Dexter", "count" : 95490 }
{ "_id" : "Doctor Who", "count" : 93602 }
{ "_id" : "House", "count" : 84901 }
{ "_id" : "Pretty Little Liars", "count" : 82789 }
{ "_id" : "Family Guy", "count" : 82322 }
{ "_id" : "How I Met Your Mother", "count" : 80002 }
{ "_id" : "Grey's Anatomy", "count" : 79585 }
{ "_id" : "American Idol", "count" : 76120 }
{ "_id" : "Bones", "count" : 74388 }
{ "_id" : "Modern Family", "count" : 74259 }

Liczba 30 najaktywniejszych u¿ytkowników
db.movies.aggregate(
    { $group: { _id: "$userId", count: { $sum: 1 } } },
	{ $sort : { count: -1 } },
	{ $limit: 30 }
)
Time: 178422ms
{ "_id" : "LukeWilliamss", "count" : 696782 }
{ "_id" : "demi_konti", "count" : 68137 }
{ "_id" : "bangwid", "count" : 59261 }
{ "_id" : "zenofmac", "count" : 56233 }
{ "_id" : "agentdunham", "count" : 55740 }
{ "_id" : "cillax", "count" : 43161 }
{ "_id" : "tamtomo", "count" : 42378 }
{ "_id" : "hblackwood", "count" : 32832 }
{ "_id" : "ellen_turner", "count" : 32239 }
{ "_id" : "husainholic", "count" : 32135 }
{ "_id" : "dollyrasyad", "count" : 31314 }
{ "_id" : "DeniseChinita", "count" : 31263 }
{ "_id" : "Putu_Nitovic", "count" : 29895 }
{ "_id" : "SusantiBharuna", "count" : 28706 }
{ "_id" : "zbj", "count" : 28601 }
{ "_id" : "xtrachrisp", "count" : 28282 }
{ "_id" : "carla_moraglia", "count" : 27621 }
{ "_id" : "shady2brandals", "count" : 27038 }
{ "_id" : "tedi31", "count" : 25403 }
{ "_id" : "johnnym2001", "count" : 25249 }
{ "_id" : "twrecker", "count" : 24987 }
{ "_id" : "samnaeev", "count" : 24949 }
{ "_id" : "endika", "count" : 24938 }
{ "_id" : "Brunette_31", "count" : 23777 }
{ "_id" : "nsikado", "count" : 23544 }
{ "_id" : "jana_nelli", "count" : 22961 }
{ "_id" : "ardiansyah_mertowidjoyo", "count" : 22882 }
{ "_id" : "SisterZilla", "count" : 22331 }
{ "_id" : "darylrosemd", "count" : 22199 }
{ "_id" : "WHIESKIE", "count" : 21673 }



Podliczenie ulubionych filmów
db.movies.aggregate(
	{ $match: { modelName: "movies" } },
	{ $match: { action: "Favorited" } },
	{ $group: { _id: "$title", count: { $sum: 1 } } },
	{ $sort : { count: -1 } },
	{ $limit: 10 }
)

Time: 161424ms
{ "_id" : "Inception", "count" : 948 }
{ "_id" : "Fight Club", "count" : 937 }
{ "_id" : "The Hangover", "count" : 825 }
{ "_id" : "Lord of the Rings: The Return of the King", "count" : 735 }
{ "_id" : "Pulp Fiction", "count" : 727 }
{ "_id" : "The Hunger Games", "count" : 725 }
{ "_id" : "Lord of the Rings: The Two Towers", "count" : 711 }
{ "_id" : "Harry Potter and the Deathly Hallows: Part II", "count" : 676 }
{ "_id" : "Lord of the Rings: The Fellowship of the Ring", "count" : 658 }
{ "_id" : "Marvel's The Avengers", "count" : 652 }

Najczêœciej polubione filmy steven spielberg
db.movies.aggregate(
      { $match: {director: "steven spielberg"  } },
      { $match: {action: "Liked"} },
      { $group: {_id: "$title", count: {$sum: 1}} },
      { $sort: {count: -1} },
      { $limit : 10}
    )
Time: 165308ms
{ "_id" : "Indiana Jones and the Raiders of the Lost Ark", "count" : 9871 }
{ "_id" : "Jurassic Park", "count" : 9553 }
{ "_id" : "Saving Private Ryan", "count" : 9087 }
{ "_id" : "Indiana Jones and the Last Crusade", "count" : 6980 }
{ "_id" : "Indiana Jones and the Temple of Doom", "count" : 6840 }
{ "_id" : "Indiana Jones and the Kingdom of the Crystal Skull", "count" : 6579 }
{ "_id" : "Schindler's List", "count" : 5441 }
{ "_id" : "Minority Report", "count" : 5409 }
{ "_id" : "E.T.: The Extra-Terrestrial", "count" : 4543 }
{ "_id" : "Jaws", "count" : 4097 }