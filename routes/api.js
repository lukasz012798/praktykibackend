const express = require("express");
const router = express.Router();

require("dotenv/config");

const DAL = require("../DAL");

router.get("/news", (req, res) => {
  DAL.getNews((data) => res.json(data));
});

router.delete("/news", (req, res) => {
  DAL.deleteNews((data) => res.json(data));
});

router.post("/news", (req, res) =>
  DAL.postNews((data, status) => res.status(status).json(data), req.body)
);

module.exports = router;
