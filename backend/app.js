const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const postRoute = require("./routes/post");
const userRoute = require("./routes/user");

app.use((req, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});



mongoose.connect("mongodb+srv://andrewlastrapes:igCtZM6MaGDH6OCg@cluster0-epe8p.mongodb.net/test?retryWrites=true", () => {
    console.log("Connected to mongoDB")
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/post", postRoute);
app.use("/user", userRoute);

module.exports = app;