const News = require("./models/newsModel");

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

const patchNews = (callback, body, id) => {
  // if (body.date !== undefined) {
  //   const dateParts = body.date.split("-");
  //   const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
  //   body.date = dateObject;
  // }
  // console.log(body);
  News.findByIdAndUpdate(
    require("mongodb").ObjectID(id),
    body,
    (err, result) => {
      if (err) {
        console.log(err);
        return callback({ status: "Internal Server Error" }, 500);
      }
      callback({ Status: "Updated" }, 200);
    }
  );
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

const getOne = (callback, id) => {
  News.findById(id, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      callback(docs);
    }
  });
};

const deleteOneNews = (cb, id) => {
  News.findByIdAndDelete(id, function (err, docs) {
    if (err) {
      cb("błąd");
    } else {
      cb("usunieto pomyslnie");
    }
  });
};

module.exports.post = postNews;
module.exports.patch = patchNews;
module.exports.get = getNews;
module.exports.getOne = getOne;
module.exports.deleteOne = deleteOneNews;
