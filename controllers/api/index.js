const router = require("express").Router();
const userRoutes = require("./userRoutes");
const projectRoutes = require("./projectRoutes");

const postRoutes = require("./postRoutes");

const commentRoutes = require("./commentRoutes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/projects", projectRoutes);

router.use("/comments", commentRoutes);

module.exports = router;
