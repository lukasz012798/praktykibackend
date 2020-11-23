const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

require("dotenv/config");

const DALNews = require("../DALNews");
//API
//GET
router.get("", (req, res) => {
  DALNews.get((data) => res.json(data));
});
//POST
router.post("/post", (req, res) => {
  return DALNews.post(
    (data, status) => res.status(status).json(data),
    req.body
  );
});
//PATCH
router.patch("/patch/:id", (req, res) => {
  console.log("body", req.body);
  return DALNews.patch(
    (data, status) => res.status(status).json(data),
    req.body,
    req.params.id
  );
});
//DELETEONE
router.delete("/deleteOne/:id", (req, res) => {
  DALNews.deleteOne((data) => res.json(data), req.params.id);
});
//GETONE
router.get("/getOne/:id", (req, res) => {
  DALNews.getOne((data) => res.json(data), req.params.id);
});
//SITE
//POST
router.get("/post", (req, res) => {
  res.sendFile("postNews.html", { root: `${__dirname}/../public` });
});
//PATCHSCRIPT
router.get("/patch/patchScript", (req, res) => {
  res.sendFile("patchScript.js", {
    root: `${__dirname}/../public/javascripts`,
  });
});
//PATCH
router.get("/patch/:id", (req, res) => {
  res.sendFile("patchNews.html", { root: `${__dirname}/../public` });
});
//DELETE
router.get("/delete", (req, res) => {
  // res.render("newsPost");
  res.sendFile("deleteNews.html", { root: `${__dirname}/../public` });
});
//SCRIPT
//POST
router.get("/script", (req, res) => {
  res.sendFile("postNews.js", { root: `${__dirname}/../public/javascripts` });
});
//DELETE
router.get("/deletescript", (req, res) => {
  res.sendFile("deleteScript.js", {
    root: `${__dirname}/../public/javascripts`,
  });
});

module.exports = router;
