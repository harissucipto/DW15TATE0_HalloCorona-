const { User, List } = require("../models");

exports.listAs = async (req, _res, next) => {
  const id = req.user;

  const { List: ListObj } = await User.findOne({
    where: { id },
    include: [
      {
        model: List,
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
    ],
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });

  req.role = ListObj.name;
  next();
};
