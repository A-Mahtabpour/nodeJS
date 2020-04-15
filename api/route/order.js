const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "get request",
  });
});
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  if (id === 1) {
    res.status(200).json({
      message: "get request with id:" + id,
      id: id,
    });
  } else {
    res.status(200).json({
      message: "anothor id",
    });
  }
});
router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "post request",
  });
});

router.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  if (id === 1) {
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
  const id = req.params.id;
  if (id === 1) {
    res.status(200).json({
      message: "delete request with id:" + id,
      id: id,
    });
  } else {
    res.status(200).json({
      message: "anothor id",
    });
  }
});

module.exports = router;
