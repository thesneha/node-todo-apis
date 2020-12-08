const {SHA256}= require('crypto-js');
const jwt= require('jsonwebtoken');

const bcrypt=require('bcryptjs');

var password='123abc';

// bcrypt.genSalt(10,(err,salt)=>{
//   bcrypt.hash(password,salt,(err,hash)=>{
//     console.log(hash);
//   })
// });

var hashedpassword='$2a$10$1JMpVk6XlGTrfrR2zWRDS.ciUqgQ5SVe0USFc8wfATQlQJHASR2K.';

bcrypt.compare('123abc',hashedpassword,(err,result)=>{
  console.log(result);
})





// var data={
//   id:10,
//   name:'sneha'
// };
//
// var token= jwt.sign(data,'123abc');
//
// var decode=jwt.verify(token,'123abc')
//
// console.log(token)
// console.log(token===decode);
// console.log(decode);

// var msg="i am sneha";
// var hash=SHA256(msg).toString();
//
// console.log(msg);
// console.log(hash);
//
// var data={
//   id:4
// };
//
// var token={
//   data,
//   hash:SHA256(JSON.stringify(data)+'some secret').toString()
// };
//
// data.id=5;
//
//
// var rehash=SHA256(JSON.stringify(data)+'some secret').toString();
//
// if (rehash===token.hash) {
//   console.log(" correct token ")
// }
// else {
//   console.log('incoorect token ')
// }
