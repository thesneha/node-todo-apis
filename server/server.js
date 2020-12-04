var express=require('express');
var bodyParser=require('body-parser');

var {mongoose} =require('./db/mongoose');
var {Todo} =require('./models/todo');
var {User} =require('./models/user');

var app=express();

app.listen(3000,()=>{
  console.log("server started on port 3000");
})

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  //console.log(req.body);
  var todo=new Todo({
    text:req.body.text
  })

  todo.save().then((doc)=>{
    res.send(doc);
  }).catch((err)=>{
    res.status(400).send(err);
  });

});


app.get('/todos',(req,res)=>{

  Todo.find().then((doc)=>{
    res.send({doc});
  }).catch((err)=>{
    res.status(400).send(err);
  });
});



// var newTodo= new Todo({
//   text:'heloo this is sneha  collection'
// });
// var newTodo=new Todo({
//   text:'              xydz'
// });
//
// newTodo.save().then((doc)=>{
//   console.log( doc );
// }).catch((e)=>{
//   console.log('nable to save doc', e );
// });



// var newUser=new User({
//   email:'sssnehatiwari0@gmail.com'
// })
//
// newUser.save().then((doc)=>{
//   console.log( doc );
// }).catch((e)=>{
//   console.log('nable to save doc', e );
// });
