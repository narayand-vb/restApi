const productModal = require("../modal/products");

// POST //
const storeProducts = async (req, res) => {
  try{
    const product = new productModal(req.body);
    const createProduct = await product.save();
    res.status(201).send(createProduct);
    }catch(e){
        res.status(400).send(e);
    }
};

// GET ALL DATA //
const getProducts = async (req, res) => {
  try {
    const query = req.query;
    const queryparams = {...query}
    const productData = await productModal.find(queryparams);
    res.send(productData);
} catch (e) {
    res.send(e);
}
};

// GET DATA BY ID //
const getproductDetail = async (req, res) => {
  try {
    const _id = req.params.id;
    const productData = await productModal.findById(_id);
    if(!productData){
        return res.status(404).send();
    }else{
    res.send(productData);
    }
} catch (e) {
    res.status(500).send(e);
}
};

// UPDATE DATA //
const updateProduct = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateProducts = await productModal.findByIdAndUpdate(_id, req.body,{
        new:true
    });
    res.send(updateProducts);
} catch (e) {
    res.status(404).send(e);
}
};

// DELETE DATA // 
const deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await productModal.findByIdAndDelete(req.params.id);
    if(!req.params.id){
        return res.status(404).send();
    }
    res.send(deleteProduct);
} catch (e) {
    res.status(404).send(e);
}
};

// EXPORTS //
module.exports = {
  storeProducts,
  getProducts,
  getproductDetail,
  updateProduct,
  deleteProduct,
};
