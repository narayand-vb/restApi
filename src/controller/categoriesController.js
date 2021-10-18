const categoriesModal = require("../modal/categories");

// POST //
const storeCategories = async (req, res) => {
  try {
    const categories = new categoriesModal(req.body);
    const createCatergories = await categories.save();
    res.status(201).send(createCatergories);
  } catch (e) {
    res.status(400).send(e);
  }
};

// GET ALL DATA //
const getCategories = async (req, res) => {
  try {
    const categoriesData = await categoriesModal.find();
    res.send(categoriesData);
  } catch (e) {
    res.send(e);
  }
};

// GET DATA BY ID //
const getcategoriesDetail = async (req, res) => {
  try {
    const _id = req.params.id;
    const categoriesData = await categoriesModal.findById(_id);
    if (!categoriesData) {
      return res.status(404).send();
    } else {
      res.send(categoriesData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

// UPDATE DATA //
const updatecategories = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateCategories = await categoriesModal.findByIdAndUpdate(
      _id,
      req.body,
      {
        new: true,
      }
    );
    res.send(updateCategories);
  } catch (e) {
    res.status(404).send(e);
  }
};

// DELETE DATA //
const deletecategories = async (req, res) => {
  try {
    const deletecategories = await categoriesModal.findByIdAndDelete(
      req.params.id
    );
    if (!req.params.id) {
      return res.status(404).send();
    }
    res.send(deletecategories);
  } catch (e) {
    res.status(404).send(e);
  }
};

// EXPORTS //
module.exports = {
  storeCategories,
  getCategories,
  getcategoriesDetail,
  updatecategories,
  deletecategories,
};
