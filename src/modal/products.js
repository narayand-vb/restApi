const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name : String,
  thumbnail : String,
  product_gallery : [{type: String}],
  description : String,
  base_price : Number,
  sell_price : Number,
  category_name : String,
  tags: [{type: String }],
  additional_information : String,
});



const productModal = mongoose.model("products", productSchema);

module.exports = productModal;