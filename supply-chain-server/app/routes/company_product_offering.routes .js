module.exports = app => {
  const company_product_offering = require("../controllers/company_product_offering.controller");

  var router = require("express").Router();

  // Create a new Company
  router.post("/", company_product_offering.create);

  // Retrieve all Companies
  router.get("/", company_product_offering.findAll);

  // Retrieve all published Companies
  router.get("/published", company_product_offering.findAllPublished);

  // Retrieve a single Company with id
  router.get("/:id", company_product_offering.findOne);

  // Update a Company with id
  router.put("/:id", company_product_offering.update);

  // Delete a Company with id
  router.delete("/:id", company_product_offering.delete);

  // Create a new Company
  router.delete("/", company_product_offering.deleteAll);

  app.use('/api/company-product-offering', router);
};