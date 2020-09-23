const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultsSchema = new Schema({
  result: String,
  firstArmsPath: String,
  secondArmsPath: String,
  firstName: String,
  secondName: String,
  date: { type: String, default: Date.now },
});

module.exports = mongoose.model("results", resultsSchema);
