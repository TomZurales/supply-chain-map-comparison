module.exports = app => {
  const maps = require("../controllers/maps.controller");

  var router = require("express").Router();

  // Create a new Company
  router.post("/", maps.test);

  app.use('/api/maps', router);
};