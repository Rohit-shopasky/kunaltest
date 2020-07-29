
const Auth = require("./auth");
const User = require("./user");
module.exports =(app)=> {

   app.post("/signup",Auth.signup);

   app.post("/timespent",User.timeSpent);

   app.post("/login",Auth.login);

   app.post("/getAllUsers",User.getAllUsers);

   app.post("/deleteUser",User.deleteUser);

}