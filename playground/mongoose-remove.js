const {ObjectID}=require('mongodb');

const {mongoose} =require('./../server/db/mongoose');
const {Todo} =require('./../server/models/todo');
const {User} =require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

// Todo.findOneAndRemove({_id:'5fcb9b64747f7b368868cb5a'}).then((result)=>{
//   console.log(result);
// });

Todo.findByIdAndRemove('5fcb9b66747f7b368868cb5b').then((todo)=>{
  console.log(todo);
});
