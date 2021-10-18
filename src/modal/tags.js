const mongoose = require("mongoose");

const tagSchema = mongoose.Schema({
  name : String,
  slug : String
});

const tagModal = mongoose.model("tags", tagSchema);

module.exports = tagModal;