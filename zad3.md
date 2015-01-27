## Zadanie 3 

#####Wyszukanie wszystkich anagramów z pliku word_list.txt

Import pliku csv do bazy mongo.
```
mongoimport --type csv -c words -f word --file word_list.txt
```
Ilość elementów w bazie.
```
db.words.count()
8199
```
Skrypt tworzący nową kolekcję z anagramami przy użyciu Map-Reduce
```
var map = function() {
    emit(Array.sum(this.word.split('').sort()), this.word);
};
var reduce = function(key, values) {
    return values.toString();
};
printjson(db.words.mapReduce(map, reduce, { out: "anagrams" }));
```
Wynik wykonania skryptu.
```
mongo anagrams.js
{
        "result" : "anagrams",
        "timeMillis" : 353,
        "counts" : {
                "input" : 8199,
                "emit" : 8199,
                "reduce" : 914,
                "output" : 7011
        },
        "ok" : 1
}
```
Lista wszystkich anagramów:
[link](/zad3/anagrams.txt)  

Skrypt użyty do wygenerowania listy
```
db.anagrams.find().forEach( function (object) {
	object.count = String(object.value).split(',').length;
    db.anagrams.save(object);
});
db.anagrams.find({count:{$gt:1}}).sort({'count':-1}).forEach( function (object) {
	print(object._id, '->', object.value);
});
```

#####Wyszukanie najczęstszych wystąpień słów na Wikipedii (baza z 16.01.2015)

