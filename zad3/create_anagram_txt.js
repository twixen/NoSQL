db.anagrams.find().forEach( function (object) {
	object.count = String(object.value).split(',').length;
    db.anagrams.save(object);
});
db.anagrams.find({count:{$gt:1}}).sort({'count':-1}).forEach( function (object) {
	print(object._id, '->', object.value);
});