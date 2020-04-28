"use strict";

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      "Replies",
      [
        {
          id: 1,
          consultationId: 1,
          userId: 2,
          response: "Ok Siap",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Replies", null, {});
  },
};
