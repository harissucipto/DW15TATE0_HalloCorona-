"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Articles",
      [
        {
          id: 1,
          title: "Artikel 1",
          userId: 2,
          attacthe: "ini.jpg",
          description: "sdklsddkldlk",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: "Artikel 2",
          userId: 2,
          attacthe: "itu.jpg",
          description: "sdklsddkldlk",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Articles", null, {});
  },
};
