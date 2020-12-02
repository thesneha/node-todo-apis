// const mongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');
// var obj=new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/todoApp',(err,client)=>{
  if (err) {
    return Console.log('unable to connect to mongodb database');
  }
  console.log('connected to mongodb server');
  const db=client.db('todoApp');
  // db.collection('todos').insertOne({
  //   text:'something to do',
  //   completed:false
  // },(err,result)=>{
  //   if (err) {
  //     return Console.log('unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('Users').insertOne({
    name:'sneha',
    age:22,
    location:'gwalior'
  },(err,result)=>{
    if (err) {
      return console.log('unable to insert todo',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
    console.log(result.ops[0]._id.getTimestamp());
  });
  client.close();
})
