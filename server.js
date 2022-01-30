//Import Libs
const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles");
const methodOverride = require("method-override");
const favicon = require("serve-favicon");
const app = express();

//Connect & Create blog database
mongoose.connect("mongodb://localhost/blog");

//Set view files format to EJS instead of HTML.
app.set("view engine", "ejs");

//Add website favicon
app.use(favicon('./views/images/favicon.ico'));

//Let's express receive forms, Extend means that Objects can have other nested objects inside of it.
app.use(express.urlencoded({ extended: true }));

//Allows us to call another methods than GET & POST.
app.use(methodOverride("_method"));

//Create a default route for articles model.
app.use("/articles", articleRouter);

//The local port which the application responds to.
app.listen(5000);
