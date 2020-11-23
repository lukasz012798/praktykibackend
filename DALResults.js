const Result = require("./models/resultsModel");

const getResults = (callback) => {
  Result.find({}).exec((err, data) => {
    if (err) {
      callback("błąd");
      return;
    }
    callback(data);
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

const deleteOneResult = (cb, id) => {
  Result.findByIdAndDelete(id, function (err, docs) {
    if (err) {
      cb("błąd");
    } else {
      cb("usunieto pomyslnie");
    }
  });
};

module.exports.get = getResults;
module.exports.post = postResult;
module.exports.deleteOne = deleteOneResult;
