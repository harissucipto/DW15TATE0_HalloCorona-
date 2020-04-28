"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Consultations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullName: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      bornDate: {
        type: Sequelize.DATE,
      },
      age: {
        type: Sequelize.STRING,
      },
      height: {
        type: Sequelize.STRING,
      },
      weight: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      subject: {
        type: Sequelize.STRING,
      },
      liveConsul: {
        type: Sequelize.DATE,
      },
      description: {
        type: Sequelize.STRING,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      status: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable("Consultations");
  },
};
