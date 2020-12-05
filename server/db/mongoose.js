const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;
mongoose.Promise = global.Promise;
mongoose.connect( uri||'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true,useUnifiedTopology: true });

module.exports={
  mongoose
}
