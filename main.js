"use strict";

import express from "express";

import {
  showCourses,
  showSignUp,
  postedSignUpForm,
} from "./controllers/homeController.js";

import {
  pageNotFoundError,
  internalServerError,
} from "./controllers/errorController.js";

import layouts from "express-ejs-layouts";

// first change the error and homeController to ES6 and make the subscriberController.js file
// second add the imports from the error and homeControllers and layout.ejs. from views

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
