const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  user_id : String,
  total_items : Number,
  products : [{type: String }],
  billing_address : String,
  shipping_address : String,
  transaction_status : { type: String, enum : ['Success','Failed']},
  payment_mode : String,
  payment_status : { type: String, enum : ['Success','Failed']},
  order_status : {type: String, enum : ['Success','Failed']}
});

const orderModal = mongoose.model("orders", orderSchema);

module.exports = orderModal;