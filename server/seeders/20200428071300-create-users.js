"use strict";

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          fullName: "Haris Sucipto",
          userName: "harissucipto",
          email: "harissucipto@gmail.com",
          password:
            "$2b$10$lPy98ZMx0N/QT2XE7poVfehxu0GqkMG2f3Anm4/IM2ODnYsLEgWYG",
          listId: 1,
          gender: "male",
          phone: "0899293",
          address: "Buru Karimun",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          fullName: "Budi",
          userName: "budi",
          email: "budi@gmail.com",
          password:
            "$2b$10$lPy9Mx0N/QT2XE7poVfehxu0GqkMG2f3Anm4/IM2ODnYsLEgWYG",
          listId: 2,
          gender: "male",
          phone: "0899293",
          address: "Buru Karimun",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
