const express = require("express");
const router = express.Router();

require("dotenv/config");

const DAL = require("../DAL");

//stronka z formularzem do dodawania newsa
router.get("/news/post", (req, res) => {
  // res.render("newsPost");
  res.sendFile("postNews.html", { root: `${__dirname}/../public` });
});

//stronka z formularzem do dodawania wyniku
router.get("/result/post", (req, res) => {
  // res.render("newsPost");
  res.sendFile("postResult.html", { root: `${__dirname}/../public` });
});

//zwraca wszystkie newsy
router.get("/news", (req, res) => {
  DAL.getNews((data) => res.json(data));
});

//skrypt do obslugi formularza
router.get("/news/script", (req, res) => {
  res.sendFile("index.js", { root: `${__dirname}/../public/javascripts` });
});

//skrypt do obslugi formularza
router.get("/result/script", (req, res) => {
  res.sendFile("indexResult.js", {
    root: `${__dirname}/../public/javascripts`,
  });
});

//dodawanie newsa
router.post("/news/post", (req, res) => {
  // console.log(req.body);
  return DAL.postNews(
    (data, status) => res.status(status).json(data),
    req.body
  );
});

//usuwanie wszystkich newsow
router.delete("/news", (req, res) => {
  DAL.deleteNews((data) => res.json(data));
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
