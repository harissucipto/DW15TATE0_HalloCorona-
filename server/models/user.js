"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      fullName: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      listId: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
    User.belongsTo(models.List, {
      foreignKey: "listId",
    });
    User.hasMany(models.Article, {
      foreignKey: "userId",
    });
    User.hasMany(models.Reply, {
      foreignKey: "userId",
    });
    User.hasMany(models.Consultation, {
      foreignKey: "userId",
    });
  };
  return User;
};
