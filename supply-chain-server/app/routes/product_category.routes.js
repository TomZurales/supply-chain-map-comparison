module.exports = app => {
  const product_category = require("../controllers/product_category.controller");

  var router = require("express").Router();

  // Create a new Account
  router.post("/", product_category.create);

  // Retrieve all Accounts
  router.get("/", product_category.findAll);

  // Retrieve all published Accounts
  router.get("/published", product_category.findAllPublished);

  // Retrieve a single Account with id
  router.get("/:id", product_category.findOne);

  // Update a Account with id
  router.put("/:id", product_category.update);

  // Delete a Account with id
  router.delete("/:id", product_category.delete);

  // Create a new Account
  router.delete("/", product_category.deleteAll);

  app.use('/api/product-category', router);
};