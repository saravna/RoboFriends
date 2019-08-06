let mongo = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/Robots";
mongo.connect(url,function(err,db){
    if(err) throw err;
    /*db.createCollection("sample",function(err,res){
        if(err) throw err;
        console.log("Collection");
    })*/
    db.collection("Robots").insertOne({"name":"ravikumar"});
    console.log(db.collection("Robots").find({"name":"ravikumar"}));
    console.log("Inserted");
    db.close();
});