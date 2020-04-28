const { User, List } = require("../models");

exports.getMyProfile = async (req, res) => {
  try {
    const id = req.user;

    const user = await User.findOne({
      where: {
        id,
      },
      include: [
        {
          model: List,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
    });

    // if username not match
    if (!user) {
      return res.status(401).send({
        message: "user not found",
      });
    }
    res.status(200).send({ data: user });
  } catch (error) {
    res.status(500).send(error);
  }
};
