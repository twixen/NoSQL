## Damian Soliński

**Konfiguracja komputera:**
- Procesor Intel i5-3320M
- RAM 8GB
- Intel SSD Pro 1500
- Windows 8.1 Pro x64
- mongoDB 2.6.6
- Postgresql 9.4

###Zadanie 1a

Plik Train.csv poprawiłem poleceniem wywołanym w cygwin.
```
cat Train.csv | tr "\n" " " | tr "\r" "\n" | head -c -1 > CorrectTrain.csv
```
Polecenie wykonane w czasie 53s.

**Mongo:**
```
mongoimport --type csv --headerline -d train -c train CorrectTrain.csv
```
Rozmiar bazy: 16GB. 
Czas wykonania: 10 minut.

**Postgresql:**
```
CREATE TABLE train (
    id    	SERIAL PRIMARY KEY,
    title 	TEXT,
    body  	TEXT,
    tags  	TEXT
);
COPY train
FROM 'CorrectTrain.csv'
DELIMITER ',' 
CSV 
HEADER 
ENCODING 'UTF8'; 
```
Rozmiar bazy:  5.7GB. 
Czas wykonania: 5 minut.

###Zadanie 1b
**Mongo:**
```
db.train.count()
6034195
```
**Postgresql:**
```
SELECT COUNT(id) FROM train;
6034195
```
###Zadanie 1c
**Mongo:**


Program napisany w JavaScript.
```
var db = db.getSiblingDB('train')
var cursor = db.train.find()
while ( cursor.hasNext() ){
	var object = cursor.next();
	var tag_array = String(object.Tags).split(" ");
	db.train.update(object, {$set: {Tags: tag_array}})
}
```
3055322
Polecenie wykonane w czasie 51m.


var db = db.getSiblingDB('train');
var cursor = db.train.find();
var tag_count = 0;
while ( cursor.hasNext() ){
	tag_count += cursor.next().Tags.length;
}

Count: 16923038
Time: 122914ms
Polecenie wykonane w czasie 2m.

**Postgresql:**

Zmiana formatu:
```
CREATE TABLE tags (
    id    		SERIAL PRIMARY KEY,
    id_train 	INT,
    tag  		TEXT
);

INSERT INTO tags (id_train, tag)
SELECT train.id, unnest(string_to_array(tags, ' ')) FROM train;

ALTER TABLE train DROP COLUMN tags;
```
Czas wykonania: 2.5 minuty.
Ramiar bazy: 6.5GB.

Ilość tagów:
```
SELECT COUNT(id) FROM tags;
17409994
```
Ilość unikalnych tagów:
```
SELECT COUNT(DISTINCT tag) FROM tags;
42048
```
10 najczęstszych tagów:
```
SELECT COUNT(tag), tag FROM tags GROUP BY tag ORDER BY COUNT(tag) DESC LIMIT 10;
463526 | c#
412189 | java
392451 | php
365623 | javascript
320622 | android
305614 | jquery
199280 | c++
184928 | python
183573 | iphone
177334 | asp.net
```
10 najrzadszych tagów:
```
SELECT COUNT(tag), tag FROM tags GROUP BY tag ORDER BY COUNT(tag) DESC LIMIT 10;
1 | ott
1 | captaris
1 | commserver
1 | kites
1 | transformblock
1 | webprogramming
1 | uv-filter
1 | all-authorised-users
1 | running-costs
1 | rapier-loom 
```
