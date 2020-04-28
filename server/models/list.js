"use strict";
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define(
    "List",
    {
      name: DataTypes.STRING,
      listAs: DataTypes.STRING,
    },
    {}
  );
  List.associate = function (models) {
    // associations can be defined here
    List.hasMany(models.User, {
      foreignKey: "listId",
    });
  };
  return List;
};
