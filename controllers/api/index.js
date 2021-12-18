const router = require("express").Router();
const userRoutes = require("./userRoutes");
const projectRoutes = require("./projectRoutes");

const postRoutes = require("./postRoutes");

router.use("/users", userRoutes);
router.use("/posts", projectRoutes);
router.use("/projects", projectRoutes);

module.exports = router;
