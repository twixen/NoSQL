## Damian Soliński

Konfiguracja komputera:
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
```
mongoimport --type csv --headerline -d train -c train CorrectTrain.csv
```
Baza zajmuje 16GB. Polecenie wykonane w czasie 10m i 10s.

###Zadanie 1b
```
db.train.count()
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

