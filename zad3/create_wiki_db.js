var map = function() {
	var words = this.text.split(' ');
	for (i in words) {
		   emit(words[i], 1);
	}
 };
var reduce = function(key, values) {
    return values.length;
};
printjson(db.wiki.mapReduce(map, reduce, { out: "words" }));