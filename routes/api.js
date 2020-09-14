const express = require("express");
const router = express.Router();

require("dotenv/config");

const DAL = require("../DAL");

router.get("/news/post", (req, res) => {
  // res.render("newsPost");
  res.sendFile("index.html", { root: `${__dirname}/../public` });
});

router.get("/news", (req, res) => {
  DAL.getNews((data) => res.json(data));
});

router.get("/news/script", (req, res) => {
  res.sendFile("index.js", { root: `${__dirname}/../public/javascripts` });
});

router.post("/news/post", (req, res) => {
  // console.log(req.body);
  return DAL.postNews(
    (data, status) => res.status(status).json(data),
    req.body
  );
});

router.delete("/news", (req, res) => {
  DAL.deleteNews((data) => res.json(data));
});

module.exports = router;
