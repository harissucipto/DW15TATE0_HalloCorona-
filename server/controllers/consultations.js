const { Op } = require("sequelize");
const { Consultation, Reply, User } = require("../models");

const fetchFromUser = async (req, res) => {
  try {
    const userId = req.user;
    const listData = await Consultation.findAll({
      where: {
        [Op.and]: {
          userId,
        },
      },
      include: [
        {
          model: User,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
        {
          model: Reply,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
    });
    console.log(listData);

    if (!listData) return res.status(401).send({ message: "data invalid" });

    res.status(200).send({ data: listData });
  } catch (error) {
    res.send(error);
  }
};

const fetchFromDoctor = async (req, res) => {
  try {
    // const userId = req.user;
    const listData = await Consultation.findAll({
      include: [
        {
          model: Reply,
          attributes: { exclude: ["createdAt", "updatedAt"] },
          // where: {
          //   [Op.and]: {
          //     userId,
          //   },
          // },
        },
      ],
    });
    if (!listData) return res.status(401).send({ message: "data invalid" });

    res.status(200).send({ data: listData });
  } catch (error) {
    res.send(error);
  }
};

exports.getAllConsultations = (req, res) => {
  try {
    const { role } = req;

    if (role === "user") return fetchFromUser(req, res);

    if (role === "doctor") return fetchFromDoctor(req, res);

    throw new Error("Invalid role");
  } catch (error) {
    res.send(error);
  }
};

exports.getConsultation = async (req, res) => {
  try {
    const { id } = req.params;
    const consultation = await Consultation.findOne({
      where: {
        id,
      },
      include: [
        {
          model: Reply,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
        {
          model: User,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
    });
    if (!consultation) return res.status(401).send({ message: "data invalid" });

    res.status(200).send({ data: consultation });
  } catch (error) {
    res.send(error);
  }
};

exports.createConsultation = async (req, res) => {
  try {
    const userId = req.user;
    const newData = {
      userId,
      ...req.body,
      status: "Waiting Consultant",
    };

    const consultation = await Consultation.create(newData);
    if (!consultation) return res.status(401).send({ message: "data invalid" });
    this.getConsultation(
      { ...req, params: { ...req.params, id: consultation.id } },
      res
    );
  } catch (error) {
    res.send(error);
  }
};

exports.createReply = async (req, res) => {
  try {
    const { id: consultationId } = req.params;
    const userId = req.user;

    const { response, consultation } = req.body;

    const newData = {
      userId,
      consultationId,
      response: response,
    };

    const newReply = await Reply.create(newData);

    if (!reply) return res.status(401).send({ message: "data invalid" });

    const newConsultant = await Consultation.update({
      ...consultation,
    });

    if (!newConsultant)
      return res.status(401).send({ message: "data invalid" });

    const reply = await Reply.findOne({
      where: { id: newReply.id },
      include: [{ model: Consultation }],
    });

    res.send({ data: reply });
  } catch (error) {
    res.send(error);
  }
};
