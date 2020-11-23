const express = require("express");
const router = express.Router();

require("dotenv/config");

const DALResults = require("../DALResults");
//API
//GET
router.get("", (req, res) => {
  DALResults.get((data) => res.json(data));
});
//POST
router.post("/post", (req, res) => {
  return DALResults.post(
    (data, status) => res.status(status).json(data),
    req.body
  );
});
//DELETEONE
router.delete("/deleteOne/:id", (req, res) => {
  DALResults.deleteOne((data) => res.json(data), req.params.id);
});

//SITE
//POST
router.get("/post", (req, res) => {
  res.sendFile("resultsPost.html", { root: `${__dirname}/../public` });
});
//EDIT
router.get("/edit", (req, res) => {
  res.sendFile("resultsEdit.html", { root: `${__dirname}/../public` });
});

//SCRIPT
//POST
router.get("/resultsPost", (req, res) => {
  res.sendFile("resultsPost.js", {
    root: `${__dirname}/../public/javascripts`,
  });
});
//DELETE
router.get("/resultsEdit", (req, res) => {
  res.sendFile("resultsEdit.js", {
    root: `${__dirname}/../public/javascripts`,
  });
});

module.exports = router;
