const User = require("./User");
const Project = require("./Project");
const Post = require("./Post");

User.hasMany(Project, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Project, Post };
