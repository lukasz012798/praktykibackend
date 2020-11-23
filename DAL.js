const Gallery = require("./models/galleryModel");

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

const getGalleries = (callback) => {
  Gallery.find({}).exec((err, data) => {
    if (err) return callback("błąd");
    callback(data);
  });
};

module.exports.postGallery = postGallery;
module.exports.getGalleries = getGalleries;
