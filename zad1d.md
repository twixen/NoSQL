###Zadanie 1d

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

```
db.alabama.find({ loc: {$near: {
	$geometry: {
		type: "Point", 
		coordinates: [32.6629128,-85.0910479]
	},
	$maxDistance: 1000
}}})
```

```
db.alabama.find({ loc: {$geoWithin: {$geometry: {
	type: "Polygon",
    coordinates: [ 
		[ 
			[ 0, 0 ], 
			[ 3, 6 ], 
			[ 6, 1 ], 
			[ 0, 0 ] 
		] 
	]
}}}})
```
```
db.alabama.find({ loc: {$geoIntersects: {$geometry: {
	type: "LineString",
    coordinates:
    [
		[ 17.970, 54.130 ],
        [ 18.779, 54.099 ],
        [ 18.930, 53.740 ],
        [ 16.689, 53.710 ],
        [ 17.970, 54.130 ]
    ]
}}}})
```