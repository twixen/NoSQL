var map = function() {
    emit(Array.sum(this.word.split('').sort()), this.word);
};
var reduce = function(key, values) {
    return values.toString();
};
printjson(db.words.mapReduce(map, reduce, { out: "anagrams" }));