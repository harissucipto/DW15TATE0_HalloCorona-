const jwt = require("jsonwebtoken");
const { User } = require("../models");

exports.authenticated = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token)
      return res
        .status(401)
        .send({ message: "You're unauthorized!" });

    const { id } = jwt.verify(
      token.replace("Bearer ", ""),
      process.env.JWT_SECRET
    );
    if (!id)
      return res
        .status(403)
        .send({ message: "Forbidden request!" });

    const user = await User.findOne({ where: { id } });
    if (!user)
      return res
        .status(403)
        .send({ message: "Forbidden request!" });

    req.user = user.id;
    req.token = token;
    next();
  } catch (error) {
    res.status(500).send({ message: "Server Internal Error" });
    console.log(error);
  }
};
