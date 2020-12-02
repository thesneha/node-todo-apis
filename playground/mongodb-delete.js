// const mongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp',(err,client)=>{
  if (err) {
    return Console.log('unable to connect to mongodb database');
  }
  console.log('connected to mongodb server');
  const db=client.db('todoApp');

  //deleteMany
  // db.collection('todos').deleteMany({text : 'sething to do',}).then((result)=>{
  //   console.log(result);
  // })

  //deleteOne
  // db.collection('todos').deleteOne({text : 'something to do',}).then((result)=>{
  //   console.log(result);
  // })

  //findOneAndDelete
  db.collection('todos').findOneAndDelete({text : 'something to do',}).then((result)=>{
    console.log(result);
  })


  //client.close();
})
