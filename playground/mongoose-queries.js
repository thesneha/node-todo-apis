const {ObjectID}=require('mongodb');

const {mongoose} =require('./../server/db/mongoose');
const {Todo} =require('./../server/models/todo');
const {User} =require('./../server/models/user');

const id='5fc889db892310156c1b887c';

// if (ObjectID.isValid(id)) {
//   console.log('id is valid objectId');
// }
// console.log(id);
// console.log('invalid id');



// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log('todos:',todos);
// }).catch((e)=>{
//   console.log("error",e);
// });
//
// Todo.findOne({
//   completed:false
// }).then((todos)=>{
//   console.log('todos:',todos);
// });

// Todo.findById(id).then((todo)=>{
//   if (!todo) {
//     return console.log('id not found');
//   }
//   console.log('todo by id:',todo);
// }).catch((err)=>{
//   console.log(err);
// });


// User.findById(id).then((user)=>{
//   if (!user) {
//     return console.log('user not found');
//   }
//   console.log('user by id:',user);
// }).catch((err)=>{
//   console.log(err);
// });
