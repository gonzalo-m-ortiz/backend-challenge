const express = require("express");
const cookieParser = require("cookie-parser");
const httpLogger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes");
const swaggerRouter = require("./docs/swagger");

const app = express();

app.use(cors());
app.use(httpLogger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/docs", swaggerRouter);
app.use("/api", indexRouter);

// url not hosted handler
app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

// error handler
app.use((err, req, res, next) => {
  if (!err.status) {
    // TODO - log error properly
    console.error(err);
    err.status = 500;
    err.message = "Internal Server Error";
  }

  if (err.validationError) {
    return res.status(err.status).json({ errors: err.validationError });
  }

  res.status(err.status).json({ error: err.message });
});

module.exports = app;
