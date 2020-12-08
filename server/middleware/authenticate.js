var {User} =require('./../models/user');

var authenticate=(req,res,next)=>{
  var token =req.header('x-auth');
  User.findByToken(token).then((user)=>{
    if (!user) {
      return Promise.reject();
    }
    // console.log(req.user);
    // console.log(req.body);
    req.user=user;// doubt hai
    req.token=token;

    // console.log(req.user);
    // console.log(req.token);
    next();
  }).catch((e)=>{
    res.status(401).send();
  });
};

module.exports={
  authenticate
};
