module.exports = app => {
  const company = require("../controllers/company.controller");

  var router = require("express").Router();

  // Create a new Company
  router.post("/", company.create);

  // Retrieve all Companies
  router.get("/", company.findAll);

  // Retrieve all published Companies
  router.get("/:productCategoryId", company.findAllByProductCategory);

  // Retrieve a single Company with id
  router.get("/:id", company.findOne);

  // Update a Company with id
  router.put("/:id", company.update);

  // Delete a Company with id
  router.delete("/:id", company.delete);

  // Create a new Company
  router.delete("/", company.deleteAll);

  app.use('/api/company', router);
};