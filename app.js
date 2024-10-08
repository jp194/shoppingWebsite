var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var dotenv = require("dotenv");
var connectDB = require("./config/db");
var authRoutes = require("./routes/authRoute");
var cors = require("cors");

dotenv.config();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const { isAdmin, requireSignIn } = require("./middlewares/authMiddleware");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/v1/auth", authRoutes);

app.use("/checkUserLoggedIn", requireSignIn, (req, res) => {
  res.status(200).send({
    success: true,
    message: "User is Admin",
  });

  return res;
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});

connectDB();

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
