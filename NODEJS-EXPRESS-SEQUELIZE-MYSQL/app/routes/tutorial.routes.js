module.exports = (app) => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tutorials.create);

  // Retrieve all tutorials
  router.get("/", tutorials.findAll);

  // Retrieve all published tutorials
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single user with id
  router.get("/:id", tutorials.findOne);

  // Update a user with id
  router.put("/:id", tutorials.update);

  // Delete a user with id
  router.delete("/:id", tutorials.delete);

  // delete all tutorials
  router.delete("/", tutorials.deleteAll);

  app.use("/api/tutorials", router);
};
