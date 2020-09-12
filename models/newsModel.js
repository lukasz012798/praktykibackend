const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  category: Number,
  date: { type: String, default: Date.now },
  imagePath: String,
  gallery: [String],
  title: String,
  text: String,
});

module.exports = mongoose.model("news", newsSchema);
