var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var methodOverride = require("method-override");
var cors = require("cors");

const receipeCategoryRouter = require("./app/recipe_category/router");
const receipeRouter = require("./app/recipe/router");
const authRouter = require("./app/auth/router");
const searchRouter = require("./app/search/router");
const serveHistoryRouter = require("./app/serve_history/router");

const session = require("express-session");
const flash = require("connect-flash");

var app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {},
  })
);
app.use(methodOverride("_method"));
app.use(flash());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// API
app.use("/", authRouter);
app.use("/recipe-categories", receipeCategoryRouter);
app.use("/recipes", receipeRouter);
app.use("/auth", authRouter);
app.use("/search", searchRouter);
app.use("/serve-histories", serveHistoryRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
