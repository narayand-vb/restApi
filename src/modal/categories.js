const mongoose = require("mongoose");

const categorieSchema = mongoose.Schema({
  name : String,
  slug : String,
  image : String,
  description : String,
});

const categoriesModal = mongoose.model("categories", categorieSchema);

module.exports = categoriesModal;