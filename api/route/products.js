const express = require("express");
const router = express.Router();
const mysqlConection = require("./conectDB");

router.get("/", (req, res, next) => {
  mysqlConection.query("select * from mytable", (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        message: "GET request to give all products",
        URL: "/products",
        data: rows,
      });
    }
  });
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  mysqlConection.query(
    `select * from mytable where id =${id}`,
    (err, rows, field) => {
      if (!err) {
        if (rows.length !== 0) {
          res.status(200).json({
            message: "get request with id:" + id,
            id: id,
            data: rows,
          });
        } else {
          res.status(200).json({
            message: " empty opject",
          });
        }
      } else {
        console.log(err);
      }
    }
  );
});

router.post("/", (req, res, next) => {
  mysqlConection.query(
    `INSERT INTO myTable ( message ) VALUES ( "${req.body.data}")`,
    (err, rows, field) => {
      if (!err) {
        res.status(200).json({
          message: "post request",
          data: rows.message,
        });
      } else {
        console.log(err);
      }
    }
  );
});

router.patch("/:id", (req, res, next) => {
  // Conect MySQL and ...
  const id = req.params.id;
  if (id === "1") {
    res.status(200).json({
      message: "update request with id:" + id,
      id: id,
    });
  } else {
    res.status(200).json({
      message: "anothor id",
    });
  }
});

router.delete("/:id", (req, res, next) => {
  // Conect MySQL and ...
  const id = req.params.id;
  res.status(200).json({
    message: "delete request with id:" + id,
    id: id,
  });
});

module.exports = router;
