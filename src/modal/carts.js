const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  product : String,
  user : String,
  product_qty : Number,
  base_price : Number,
  sell_price : Number,
  total_price : Number,
});

const cartModal = mongoose.model("carts", cartSchema);

module.exports = cartModal;