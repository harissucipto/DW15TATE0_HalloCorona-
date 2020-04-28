const { User, List } = require("../models");

const mustRole = (role) => async (req, res, next) => {
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

  if (ListObj && ListObj.name === role) return next();

  res.status(401).send({ message: "unauthoriz cant access!" });
};

exports.mustUser = mustRole("user");
exports.mustDoctor = mustRole("doctor");
