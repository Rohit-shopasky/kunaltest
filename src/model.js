const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersModel = new Schema(
  {
    firstName: String,
    lastName: String,
    email:{type:String,default:""},
    password: {type:String,default:""},
    token: {type:String},
    loginAt: {type:Date},
    createdAt:{type:Date,default:new Date()}
  },
  
);

const userActivityModel = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'users' },
    timeSpent: String,
    pageId:{type:String,default:""},
    userName:String,
    createdAt:{type:Date,default:new Date()}
  },
  
);

const Schemas = {
  userModel: mongoose.model('users', usersModel),
  userActivityModel: mongoose.model('useracts', userActivityModel),
}

module.exports = Schemas;