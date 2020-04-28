"use strict";

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      "Consultations",
      [
        {
          id: 1,
          fullName: "Haris",
          phone: "23930",
          bornDate: new Date(),
          age: "23",
          height: "180",
          weight: "39",
          gender: "male",
          subject: "Sakit Kepala",
          liveConsul: new Date(),
          description: "Ini Sakit",
          userId: 1,
          status: "Waiting Consultant",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          fullName: "Haris",
          phone: "23930",
          bornDate: new Date(),
          age: "23",
          height: "180",
          weight: "39",
          gender: "male",
          subject: "Konfirmasi yes",
          liveConsul: new Date(),
          description: "Ini Sakit",
          userId: 1,
          status: "Waiting Consultant",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Consultations", null, {});
  },
};
