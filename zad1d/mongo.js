var db = db.getSiblingDB('alabama');
db.alabama.find().forEach( function (object) {
    object.loc =  {type:"Point", "coordinates":[object.PRIM_LAT_DEC, object.PRIM_LONG_DEC]};
    db.alabama.save(object);
});
