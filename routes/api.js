const express = require("express");
const router = express.Router();

require("dotenv/config");

const DAL = require("../DAL");

//
//
// - aktualności

//site post news
router.get("/news/post", (req, res) => {
  // res.render("newsPost");
  res.sendFile("postNews.html", { root: `${__dirname}/../public` });
});

//get all news
router.get("/news", (req, res) => {
  DAL.getNews((data) => res.json(data));
});

//script
router.get("/news/script", (req, res) => {
  res.sendFile("index.js", { root: `${__dirname}/../public/javascripts` });
});

//add news
router.post("/news/post", (req, res) => {
  // console.log(req.body);
  return DAL.postNews(
    (data, status) => res.status(status).json(data),
    req.body
  );
});

//delete all news
router.delete("/news", (req, res) => {
  DAL.deleteNews((data) => res.json(data));
});

//detele one news
router.delete("/news/deleteOne/:id", (req, res) => {
  DAL.deleteOneNews((data) => res.json(data), req.params.id);
});

//site - delete news
router.get("/news/delete", (req, res) => {
  // res.render("newsPost");
  res.sendFile("deleteNews.html", { root: `${__dirname}/../public` });
});

//deletesite script
router.get("/news/deletescript", (req, res) => {
  res.sendFile("deleteScript.js", {
    root: `${__dirname}/../public/javascripts`,
  });
});

// - -aktualności
//
//

//stronka z formularzem do dodawania wyniku
router.get("/result/post", (req, res) => {
  // res.render("newsPost");
  res.sendFile("postResult.html", { root: `${__dirname}/../public` });
});

//skrypt do obslugi formularza
router.get("/result/script", (req, res) => {
  res.sendFile("indexResult.js", {
    root: `${__dirname}/../public/javascripts`,
  });
});

//dodawanie wyniku
router.post("/result/post", (req, res) => {
  return DAL.postResult(
    (data, status) => res.status(status).json(data),
    req.body
  );
});

//zwraca wszystkie wyniki
router.get("/results", (req, res) => {
  DAL.getResults((data) => res.json(data));
});

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
