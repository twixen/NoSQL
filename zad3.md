### Zadanie 3 
<<<<<<< HEAD
Wyszukanie wszystkich anagramów w pliku word_list.txt

Import pliku csv do bazy mongo.
```
mongoimport --type csv -c words -f word --file word_list.txt
```
Ilość elementów w bazie.
=======
Import do bazy.
```
mongoimport --type csv -c words -f word --file word_list.txt
```
Ilość elementów.
>>>>>>> 2023a0000bddd99f15b59ccbf01281b2043d25ec
```
db.words.count()
8199
```
<<<<<<< HEAD
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
=======
>>>>>>> 2023a0000bddd99f15b59ccbf01281b2043d25ec
