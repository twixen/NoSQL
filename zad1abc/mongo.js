mongoimport --type csv --headerline -c train CorrectTrain.csv

db.train.count()

db.train.find().forEach( function (object) {
  if (!Array.isArray(object.Tags)){
    object.Tags = String(object.Tags).split(' ');
    db.train.save(object);
}});

db.train.aggregate(
    { $project: { "Tags":1 } },
    { $unwind: "$Tags" },
    { $group: { "_id": "result", count: {$sum:1} } }
)
db.train.distinct("Tags").length

db.train.aggregate( 
    { $project: { "Tags":1 } }, 
    { $unwind: "$Tags" }, 
    { $group: { _id: "$Tags", count: {$sum:1} } }, 
    { $sort: {count:-1} },
    { $limit:10 }
)

db.train.aggregate( 
    { $project: { "Tags":1 } }, 
    { $unwind: "$Tags" }, 
    { $group: { _id: "$Tags", count: {$sum:1} } }, 
    { $sort: {count:1} },
    { $limit:10 }
)