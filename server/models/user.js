const mongoose=require('mongoose');
const validator = require('validator');
const jwt= require('jsonwebtoken');
const _ =require('lodash');
const bcrypt=require('bcryptjs');

var UserSchema =new mongoose.Schema({
  email:{
    type:String,
    required:true,
    minlength:1,
    trim:true,
    unique:true,
    validate:{
      validator:(value)=>{
         return validator.isEmail(value);
      },
      message: '{VALUE} is not a valid value'
    }
  },
  password:{
    type:String,
    required:true,
    minlength:6
  },
  tokens:[{
    access:{
      type:String,
      required:true,
    },
    token:{
      type:String,
      required:true,
    }
  }]
});

UserSchema.methods.toJSON=function (){
  var user=this;
  var userObject= user.toObject();
  return _.pick(userObject,['_id','email']);
}

UserSchema.methods.generateAuthToken = function() {
  var user=this;
  var access='auth';
  var token=jwt.sign({_id:user._id.toHexString(),access},'abc123').toString();
  user.tokens.push({access,token});//can cause error
  //user.tokens=user.tokens.concat([access,token]);
  // return user.save().then(()=>{
  //   return token;
  // })
  user.save();
  return token;
};

UserSchema.statics.findByToken=function (token){
  var xyz=this;//xyz==User
  var decode;
  try{
    decode=jwt.verify(token,'abc123');
  }catch(e){
    // return new Promise((resolve,reject)=>{
    //   reject();
    // });
    return Promise.reject();
  }
  return xyz.findOne({
    '_id':decode._id,
    'tokens.token':token

  });
};

UserSchema.pre('save',function(next){
  var user=this;

  if(user.isModified('password')){
    bcrypt.genSalt(10,(err,salt)=>{
      bcrypt.hash(user.password,salt,(err,hash)=>{
        user.password=hash;
        next();
      })
    });
  }
  else {
    next();
  }
});




var User= mongoose.model('User',UserSchema);
module.exports={User};
