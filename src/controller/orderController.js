const orderModal = require("../modal/order");

// POST //
const storeOrders = async (req, res) => {
  try{
    const order = new orderModal(req.body);
    const createOrder = await order.save();
    res.status(201).send(createOrder);
    }catch(e){
        res.status(400).send(e);
    }
};

// GET ALL DATA //
const getOrders = async (req, res) => {
  try {
    const orderData = await orderModal.find();
    res.send(orderData);
} catch (e) {
    res.send(e);
}
};

// GET DATA BY ID //
const getorderDetail = async (req, res) => {
  try {
    const _id = req.params.id;
    const orderData = await orderModal.findById(_id);
    if(!orderData){
        return res.status(404).send();
    }else{
    res.send(orderData);
    }
} catch (e) {
    res.status(500).send(e);
}
};

// UPDATE DATA //
const updateOrder = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateOrders = await orderModal.findByIdAndUpdate(_id, req.body,{
        new:true
    });
    res.send(updateOrders);
} catch (e) {
    res.status(404).send(e);
}
};

// DELETE DATA //
const deleteOrder = async (req, res) => {
  try {
    const deleteOrder = await orderModal.findByIdAndDelete(req.params.id);
    if(!req.params.id){
        return res.status(404).send();
    }
    res.send(deleteOrder);
} catch (e) {
    res.status(404).send(e);
}
};

// EXPORTS //
module.exports = {
  storeOrders,
  getOrders,
  getorderDetail,
  updateOrder,
  deleteOrder,
};
