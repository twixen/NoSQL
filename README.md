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
    id    	INT PRIMARY KEY,
    title 	TEXT,
    body  	TEXT,
    tags  	TEXT
);
COPY train
FROM 'D:/mongo/CorrectTrain.csv'
DELIMITER ',' 
CSV 
HEADER 
ENCODING 'UTF8'; 
```
Rozmiar bazy:  6GB. 
Czas wykonania: 5 minut.

###Zadanie 1b
```
db.train.count()
6034195
```
```
SELECT COUNT(id) FROM train;
6034195
```
###Zadanie 1c

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
