const {SHA256}= require('crypto-js');
const jwt= require('jsonwebtoken');

var data={
  id:10,
  name:'sneha'
};

var token= jwt.sign(data,'123abc');

var decode=jwt.verify(token,'123abc')

console.log(token)
console.log(token===decode);
console.log(decode);

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
