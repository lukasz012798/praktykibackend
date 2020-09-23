const News = require("./models/newsModel");
const Result = require("./models/resultsModel");
const Gallery = require("./models/galleryModel");

const postNews = (callback, body) => {
  if (body.date !== undefined) {
    const dateParts = body.date.split("-");
    const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    body.date = dateObject;
  }

  const newsData = new News(body);

  newsData.save((err) => {
    if (err) return callback({ status: "Internal Server Error" }, 500);
    callback({ Status: "Created" }, 201);
  });
};

const postResult = (cb, body) => {
  if (body.date !== undefined) {
    const dateParts = body.date.split("-");
    const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    body.date = dateObject;
  }

  const resultData = new Result(body);

  resultData.save((err) => {
    if (err) return cb({ status: "Internal Server Error" }, 500);
    cb({ Status: "Created" }, 201);
  });
};

const postGallery = (cb, body) => {
  if (body.date !== undefined) {
    const dateParts = body.date.split("-");
    const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    body.date = dateObject;
  }

  const galleryData = new Gallery(body);

  galleryData.save((err) => {
    if (err) return cb({ status: "Internal Server Error" }, 500);
    cb({ Status: "Created" }, 201);
  });
};

const getNews = (callback) => {
  News.find({}).exec((err, data) => {
    if (err) {
      callback("błąd");
      return;
    }
    callback(data);
  });
};

const getResults = (callback) => {
  Result.find({}).exec((err, data) => {
    if (err) {
      callback("błąd");
      return;
    }
    callback(data);
  });
};

const deleteNews = (cb) => {
  News.remove({}, cb({ status: "deleted" }));
};

module.exports.postNews = postNews;
module.exports.postResult = postResult;
module.exports.postGallery = postGallery;
module.exports.getNews = getNews;
module.exports.getResults = getResults;
module.exports.deleteNews = deleteNews;
