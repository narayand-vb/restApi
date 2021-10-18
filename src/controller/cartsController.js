const cartModal = require("../modal/carts");

// POST //
const storeCarts = async (req, res) => {
  try{
    const cart = new cartModal(req.body);
    const createCart = await cart.save();
    res.status(201).send(createCart);
    }catch(e){
        res.status(400).send(e);
    }
};

// GET ALL DATA //
const getCarts = async (req, res) => {
  try {
    const cartData = await cartModal.find();
    res.send(cartData);
} catch (e) {
    res.send(e);
}
};

// GET DATA BY ID //
const getcartDetail = async (req, res) => {
  try {
    const _id = req.params.id;
    const cartData = await cartModal.findById(_id);
    if(!cartData){
        return res.status(404).send();
    }else{
    res.send(cartData);
    }
} catch (e) {
    res.status(500).send(e);
}
};

// UPDATE DATA //
const updateCart = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateCarts = await cartModal.findByIdAndUpdate(_id, req.body,{
        new:true
    });
    res.send(updateCarts);
} catch (e) {
    res.status(404).send(e);
}
};

// DELETE DATA //
const deleteCart = async (req, res) => {
  try {
    const deleteCart = await cartModal.findByIdAndDelete(req.params.id);
    if(!req.params.id){
        return res.status(404).send();
    }
    res.send(deleteCart);
} catch (e) {
    res.status(404).send(e);
}
};

// EXPORTS //
module.exports = {
  storeCarts,
  getCarts,
  getcartDetail,
  updateCart,
  deleteCart,
};
