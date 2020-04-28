const { Op } = require("sequelize");

const { Article } = require("../models");
const { User, List } = require("../models");

exports.getAllArticles = async (req, res) => {
  const { query } = req;

  try {
    const articles = await Article.findAll({
      where: {
        ...filterByCreatedAt(query),
      },
      include: [
        {
          model: User,
          attributes: ["id", "username", "listId"],
          include: [
            {
              model: List,
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            },
          ],
        },
      ],
      attributes: {
        exclude: ["updatedAt"],
      },
    });

    if (!articles)
      return res.status(401).send({ message: "articles not found" });

    res.status(200).send({
      data: articles,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getArticle = async (req, res) => {
  const { id } = req.params;

  try {
    const article = await Article.findOne({
      where: {
        id,
      },
      include: [
        {
          model: User,
          attributes: ["id", "username", "listId"],
          include: [
            {
              model: List,
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            },
          ],
        },
      ],
      attributes: {
        exclude: ["updatedAt"],
      },
    });

    if (!article) return res.status(401).send({ message: "article not found" });

    res.status(200).send({
      data: article,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createArticle = async (req, res) => {
  try {
    const newData = {
      ...req.body,
      userId: req.user,
    };

    const article = await Article.create(newData);

    if (!article) return res.status(401).send({ message: "data not valid" });

    this.getArticle({ ...req, params: { ...req.params, id: article.id } }, res);
  } catch (error) {
    res.send(error);
  }
};

const filterByCreatedAt = ({ createdAt }) => {
  if (!createdAt) return {};

  return {
    createdAt: {
      [Op.between]: rangeCurrent(createdAt),
    },
  };
};

const rangeCurrent = (dateString) => {
  const start = new Date(dateString).setHours(0, 0, 0);
  const end = new Date(dateString).setHours(23, 59, 59, 999);
  return [new Date(start), new Date(end)];
};
