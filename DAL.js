const News = require("./models/newsModel");

const postNews = (callback, body) => {
  const dateParts = body.date.split("-");
  const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
  body.date = dateObject;

  const newsData = new News(body);

  newsData.save((err) => {
    if (err) return callback({ status: "Internal Server Error" }, 500);
    callback({ Status: "Created" }, 201);
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

module.exports.postNews = postNews;
module.exports.getNews = getNews;
