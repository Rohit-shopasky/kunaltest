const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./src/route')(app);
const userModel = require("./src/model");
const userData = require("./login_details.json");


// userData.map(async(item)=>{
//   let userRef = userModel();
//             userRef.firstName = item.FIRSTNAME;
//             userRef.lastName = item.LASTNAME;
//             userRef.email = item.EMAIL;
//             userRef.password = item.PASSWORD;
//             let result = await userModel.collection.insert(userRef);
// })







var port = process.env.PORT || 3001;
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://root:root@cluster0-hg20y.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () => {
      console.log("running with ", port);
    });
  })
  .catch(err => {
    console.log(err);
  });