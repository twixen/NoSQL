### Zadanie 3 
Import do bazy.
```
mongoimport --type csv -c words -f word --file word_list.txt
```
Ilość elementów.
```
db.words.count()
8199
```
