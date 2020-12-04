// const mongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if (err) {
    return Console.log('unable to connect to mongodb database');
  }//_id:new ObjectID('5fc4a58354687087ff9ca343'
  console.log('connected to mongodb server');
  const db=client.db('TodoApp');
  // db.collection('todos').find({completed: true}).toArray().then((docs)=>{
  //   console.log(JSON.stringify(docs,undefined,2));
  // }).catch((err)=>{
  //   console.log("getting error" ,err);
  // });

  // db.collection('todos').find().count().then((count)=>{
  //   console.log('todos count',count);
  // }).catch((err)=>{
  //   console.log("getting error" ,err);
  // });

  db.collection('users').find({ _id : new ObjectID('2fc889db892310156c1b887c')}).count().then((count)=>{
    console.log('user count',count);
  }).catch((err)=>{
    console.log("getting error" ,err);
  });

  client.close();
})
