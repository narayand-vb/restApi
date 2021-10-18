const express = require("express");

const Router = express.Router();
///////// LOGIN - LOGOUT //////////

const { logIn, logOut } = require("./loginLogout");

Router.post("/login", logIn);
Router.get("/logout", logOut);

const { isAuthorized } = require("./auth");

////////  USER  ///////

const {
  storeUser,
  getUsers,
  getuserDetail,
  updateuser,
  deleteUser,
} = require("./controller/userController");

Router.post("/users", storeUser);
Router.get("/users", isAuthorized, getUsers);
Router.get("/users/:id", isAuthorized, getuserDetail);
Router.patch("/users/:id", isAuthorized, updateuser);
Router.delete("/users/:id", isAuthorized, deleteUser);

////////  ROLES  /////////

const {
  storeRoles,
  getRoles,
  getroleDetail,
  updateRole,
  deleteRole,
} = require("./controller/roleController");

Router.post("/roles", storeRoles);
Router.get("/roles", getRoles);
Router.get("/roles/:id", getroleDetail);
Router.patch("/roles/:id", updateRole);
Router.delete("/roles/:id", deleteRole);

///////  CATEGORIES  ///////////

const {
  storeCategories,
  getCategories,
  getcategoriesDetail,
  updatecategories,
  deletecategories,
} = require("./controller/categoriesController");

Router.post("/categories", storeCategories);
Router.get("/categories", getCategories);
Router.get("/categories/:id", getcategoriesDetail);
Router.patch("/categories/:id", updatecategories);
Router.delete("/categories/:id", deletecategories);

/////////  TAGS  /////////////

const {
  storeTags,
  getTags,
  gettagDetail,
  updateTag,
  deleteTag,
} = require("./controller/tagController");

Router.post("/tags", storeTags);
Router.get("/tags", getTags);
Router.get("/tags/:id", gettagDetail);
Router.patch("/tags/:id", updateTag);
Router.delete("/tags/:id", deleteTag);

///////////  PRODUCTS  /////////

const {
  storeProducts,
  getProducts,
  getproductDetail,
  updateProduct,
  deleteProduct,
} = require("./controller/productsController");

Router.post("/products", storeProducts);
Router.get("/products", getProducts);
Router.get("/products/:id", getproductDetail);
Router.patch("/products/:id", updateProduct);
Router.delete("/products/:id", deleteProduct);

///////////  CARTS  ///////////

const {
  storeCarts,
  getCarts,
  getcartDetail,
  updateCart,
  deleteCart,
} = require("./controller/cartsController");

Router.post("/carts", storeCarts);
Router.get("/carts", getCarts);
Router.get("/carts/:id", getcartDetail);
Router.patch("/carts/:id", updateCart);
Router.delete("/carts/:id", deleteCart);

//////////  ORDERS  ///////////

const {
  storeOrders,
  getOrders,
  getorderDetail,
  updateOrder,
  deleteOrder,
} = require("./controller/orderController");

Router.post("/orders", storeOrders);
Router.get("/orders", getOrders);
Router.get("/orders/:id", getorderDetail);
Router.patch("/orders/:id", updateOrder);
Router.delete("/orders/:id", deleteOrder);

/////// Exporting Router  /////////

module.exports = Router;
