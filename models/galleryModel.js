const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gallerySchema = new Schema({
  images: [String],
  title: String,
  date: { type: String, default: Date.now },
});

module.exports = mongoose.model("gallery", gallerySchema);
