const _ =require('lodash');
const express=require('express');
const bodyParser=require('body-parser');
const {ObjectID}=require('mongodb');

var {mongoose} =require('./db/mongoose');
var {Todo} =require('./models/todo');
var {User} =require('./models/user');
var {authenticate} =require('./middleware/authenticate');

var port = process.env.PORT||3000;

var app=express();

app.listen(port,()=>{
  console.log(`server started on port ${port}`);
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
    res.send(doc);
  }).catch((err)=>{
    res.status(400).send(err);
  });
});

app.get('/todos/:id',(req,res)=>{
  //res.send(req.params.id);

  var id =req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  Todo.findById(id).then((todo)=>{
    if (!todo) {
      //return console.log('user not found');
      return res.status(404).send();
    }
    res.send(todo);
  }).catch((err)=>{
    res.status(404).send();
  });

});

app.delete('/todos/:id',(req,res)=>{

  var id=req.params.id;

  if (!ObjectID.isValid(id)) {
    console.log('id is not valid ');
       res.status(404).send('pagalll');
       //res.status(404).send("pagal");
  }

  Todo.findByIdAndRemove(id).then((todo)=>{
    if (!todo) {
      console.log(' todo is not present ');
       res.status(404).send();
    }
    res.send(todo);
  }).catch((err)=>{
    console.log('in catch');
    res.status(404).send( );
  });
});



app.patch('/todos/:id',(req,res)=>{
  var id=req.params.id;

  if (!ObjectID.isValid(id)) {
    console.log('id is not valid ');
      return res.status(404).send();
  }

  var body= _.pick(req.body,['text','completed',"xyz"]);
  console.log(body);
  if (_.isBoolean(body.completed)&&body.completed) {
    body.completedAt= new Date().getTime();
  }
  else{
    body.completed= false;
    body.completedAt=null
  }

  Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{
    if (!todo) {
      console.log(' todo is not present ');
      return res.status(404).send();
    }
    res.send(todo);
  }).catch((err)=>{
    console.log('in catch');
    res.status(404).send();
  });
});


//post Usser request
app.post('/users',(req,res)=>{
  var body= _.pick(req.body,['email','password']);

//  console.log(body);
 var user=new User(body);
  //console.log(user);

  user.save().then(()=>{
    //res.send(user);
  return user.generateAuthToken(); //doubt tha clear ho gya :)
  }).then((token)=>{
    res.header('x-auth',token).send(user);
    res.send(user);
  }).catch((err)=>{
    res.status(400).send();
  });
});

app.get('/users/me',authenticate,(req,res)=>{
  res.send(req.user);
});

app.post('/users/login',(req,res)=>{
  var body= _.pick(req.body,['email','password']);

  User.findByCreadentials(body.email,body.password).then((user)=>{
    return user.generateAuthToken(); //doubt tha clear ho gya :)
    }).then((token)=>{
      res.header('x-auth',token).send(user);
      res.send(user);
    }).catch((err)=>{
    res.status(400).send();

  })

  //var user=new User(body);
  //console.log(user)
  // user.save().then(()=>{
  //   //res.send(user);
  // return user.generateAuthToken(); //doubt tha clear ho gya :)
  // }).then((token)=>{
  //   res.header('x-auth',token).send(user);
  //   res.send(user);
  // }).catch((err)=>{
  //   res.status(400).send();
  // });
});














//
// app.get('/users/test',(req,res)=>{
//   console.log(req.user);
//   res.send('hii');
// });


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
