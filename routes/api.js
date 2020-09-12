const express = require("express");
const router = express.Router();

require("dotenv/config");

const DAL = require("../DAL");

router.get("/news", function (req, res, next) {
  DAL.getNews((data) => res.json(data));
});

router.post("/news", (req, res) =>
  DAL.postNews((data, status) => res.status(status).json(data), req.body)
);

module.exports = router;
