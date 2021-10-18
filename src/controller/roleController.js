const roleModal = require("../modal/role");


//  POST //
const storeRoles = async (req, res) => {
  try{
    const role = new roleModal(req.body);
    const createRole = await role.save();
    res.status(201).send(createRole);
    }catch(e){
        res.status(400).send(e);
    }
};

// GET ALL DATA //
const getRoles = async (req, res) => {
  try {
    const roleData = await roleModal.find();
    res.send(roleData);
} catch (e) {
    res.send(e);
}
};

// GET DATA BY ID //
const getroleDetail = async (req, res) => {
  try {
    const _id = req.params.id;
    const roleData = await roleModal.findById(_id);
    if(!roleData){
        return res.status(404).send();
    }else{
    res.send(roleData);
    }
} catch (e) {
    res.status(500).send(e);
}
};

// UPDATE DATA //
const updateRole = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateRoles = await roleModal.findByIdAndUpdate(_id, req.body,{
        new:true
    });
    res.send(updateRoles);
} catch (e) {
    res.status(404).send(e);
}
};

// DELETE DATA //
const deleteRole = async (req, res) => {
  try {
    const deleteRole = await roleModal.findByIdAndDelete(req.params.id);
    if(!req.params.id){
        return res.status(404).send();
    }
    res.send(deleteRole);
} catch (e) {
    res.status(404).send(e);
}
};


// EXPORTS //
module.exports = {
  storeRoles,
  getRoles,
  getroleDetail,
  updateRole,
  deleteRole,
};
