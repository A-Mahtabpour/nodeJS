const express = require("express");
const morgan = require("morgan");

const App = express();

const productRoute = require("./api/route/products");  //Example
const orderRouter = require("./api/route/order"); //Example


const bodyParser = require('body-parser');
App.use(bodyParser.urlencoded({extended: false }))
App.use(bodyParser.json());

App.use(morgan("dev"));

App.use("/products", productRoute);
App.use("/orders", orderRouter);

App.use((req, res, next) => {
  res.header("Access-Controll-Allow-Origin", "*");
  res.header(
    "Access-Controll-Allow-Header",
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization"
  );
  if(req.method === 'OPTIONS'){
      res.header('Access-Controll-Allow-Methods' , 'PUT , POST , PATCH , DELETE , GET');
      return res.status(200).json({})
  }
  next();
});

App.use((req, res, next) => {
  const error = new Error("Not find any");
  error.status = 404;
  next(error);
});

App.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});



module.exports = App;
