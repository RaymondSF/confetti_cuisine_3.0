import express from "express";
import dotenv from "dotenv";

import {
  showCourses,
  showSignUp,
  postedSignUpForm,
} from "./controllers/homeController.js";

import {
  pageNotFoundError,
  internalServerError,
} from "./controllers/errorController.js";

import mongoose from "mongoose";
import layouts from "express-ejs-layouts";

const mongoUri = process.env.MONGODB_URI;
mongoose.connect(mongoUri);

const app = express();

// first change the error and homeController to ES6 and make the subscriberController.js file
// second add the imports from the error and homeControllers and layout.ejs. from views
// third configure both env and MongoDb Mongoose

app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(layouts);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
