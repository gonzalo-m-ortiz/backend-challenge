const express = require("express");
const router = express.Router();

const projectsRoutes = require("./projects");

router.use("/projects", projectsRoutes);

module.exports = router;
