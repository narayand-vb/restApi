const tagModal = require("../modal/tags");

// POST //
const storeTags = async (req, res) => {
  try{
    const tag = new tagModal(req.body);
    const createTag = await tag.save();
    res.status(201).send(createTag);
    }catch(e){
        res.status(400).send(e);
    }
};

// GET ALL DATA //
const getTags = async (req, res) => {
  try {
    const tagData = await tagModal.find();
    res.send(tagData);
} catch (e) {
    res.send(e);
}
};

// GET DATA BY ID //
const gettagDetail = async (req, res) => {
  try {
    const _id = req.params.id;
    const tagData = await tagModal.findById(_id);
    if(!tagData){
        return res.status(404).send();
    }else{
    res.send(tagData);
    }
} catch (e) {
    res.status(500).send(e);
}
};

// UPDATA DATA //
const updateTag = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateTags = await tagModal.findByIdAndUpdate(_id, req.body,{
        new:true
    });
    res.send(updateTags);
} catch (e) {
    res.status(404).send(e);
}
};

// DELETE DATA //
const deleteTag = async (req, res) => {
  try {
    const deleteTag = await tagModal.findByIdAndDelete(req.params.id);
    if(!req.params.id){
        return res.status(404).send();
    }
    res.send(deleteTag);
} catch (e) {
    res.status(404).send(e);
}
};

module.exports = {
  storeTags,
  getTags,
  gettagDetail,
  updateTag,
  deleteTag,
};
