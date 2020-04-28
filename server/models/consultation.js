"use strict";
module.exports = (sequelize, DataTypes) => {
  const Consultation = sequelize.define(
    "Consultation",
    {
      fullName: DataTypes.STRING,
      phone: DataTypes.STRING,
      bornDate: DataTypes.DATE,
      age: DataTypes.STRING,
      height: DataTypes.STRING,
      weight: DataTypes.STRING,
      gender: DataTypes.STRING,
      subject: DataTypes.STRING,
      liveConsul: DataTypes.DATE,
      description: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {}
  );
  Consultation.associate = function (models) {
    // associations can be defined here
    Consultation.hasMany(models.Reply, {
      foreignKey: "consultationId",
    });
    Consultation.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };
  return Consultation;
};
