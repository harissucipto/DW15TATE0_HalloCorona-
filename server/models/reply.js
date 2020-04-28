"use strict";
module.exports = (sequelize, DataTypes) => {
  const Reply = sequelize.define(
    "Reply",
    {
      userId: DataTypes.INTEGER,
      consultationId: DataTypes.INTEGER,
      response: DataTypes.STRING,
    },
    {}
  );
  Reply.associate = function (models) {
    // associations can be defined here
    Reply.belongsTo(models.User, {
      foreignKey: "userId",
    });
    Reply.belongsTo(models.Consultation, {
      foreignKey: "consultationId",
    });
  };
  return Reply;
};
