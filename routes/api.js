const express = require("express");
const router = express.Router();

require("dotenv/config");

const DAL = require("../DAL");

//dodawanie galerii
router.post("/gallery/post", (req, res) => {
  return DAL.postGallery(
    (data, status) => res.status(status).json(data),
    req.body
  );
});

//pobieranie wszystkich galerii
router.get("/galleries", (req, res) => {
  return DAL.getGalleries((data) => res.json(data));
});

module.exports = router;
