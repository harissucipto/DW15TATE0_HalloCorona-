"use strict";

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      "Lists",
      [
        {
          id: 1,
          name: "user",
          listAs: "0",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "doctor",
          listAs: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Lists", null, {});
  },
};
