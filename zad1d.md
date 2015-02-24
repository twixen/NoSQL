###Zadanie 1d

Stan Alabama
```
mongoimport --type csv --headerline -c alabama alabama.csv
```

```
db.alabama.find().forEach( function (object) {
    object.loc =  {type:"Point", "coordinates":[object.PRIM_LAT_DEC, object.PRIM_LONG_DEC]};
    db.alabama.save(object);
});
```

```
db.alabama.ensureIndex({"loc" : "2dsphere"})
```

W odległości do 1km.
```
db.alabama.find({ loc: {$near: {
	$geometry: {
		type: "Point", 
		coordinates: [32.6629128,-85.0910479]
	},
	$maxDistance: 1000
}}})
```

W odległości od 3km do 5km.
```
db.alabama.find({ loc: {$near: {
	$geometry: {
		type: "Point", 
		coordinates: [32.6629128,-85.0910479]
	},
    $minDistance: 3000,
    $maxDistance: 5000
}}})
```

Zawarte w obszarze.
```
db.alabama.find({ loc: {$geoWithin: {$geometry: {
	type: "Polygon",
    coordinates: [ 
		[ 
			[ 30, 85 ], 
			[ 32, 90 ], 
			[ 35, 85 ], 
			[ 30, 85 ] 
		] 
	]
}}}})
```

Na lini.
```
db.alabama.find({ loc: {$geoIntersects: {$geometry: {
	type: "LineString",
    coordinates:
    [
		[ 32.6629128,-85.0910479 ],
        [ 34.899246,-85.6158007 ],
        [ 34.2692594,-85.4371803 ],
        [ 32.4431991,-84.9199303 ],
        [ 32.4765311,-84.9027084 ]
    ]
}}}})
```