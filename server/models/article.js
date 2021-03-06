"use strict";
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    "Article",
    {
      title: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      attacthe: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {}
  );
  Article.associate = function (models) {
    // associations can be defined here
    Article.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };
  return Article;
};
