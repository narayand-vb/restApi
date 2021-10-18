const mongoose = require("mongoose");

const roleSchema = mongoose.Schema({
  name : String,
  slug : String
});

const roleModal = mongoose.model("roles", roleSchema);

module.exports = roleModal;