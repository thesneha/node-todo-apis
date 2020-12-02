// const mongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp',(err,client)=>{
  if (err) {
    return Console.log('unable to connect to mongodb database');
  }
  console.log('connected to mongodb server');
  const db=client.db('todoApp');
  db.collection('todos').findOneAndUpdate({
    _id:new ObjectID('5fc6f83e54687087ff9cb1af')
  },{
    $set:{
    completed:true
  }
  },{
      returnOriginal:false
  }).then((result)=>{
    console.log(result);
  });




  //client.close();
})
