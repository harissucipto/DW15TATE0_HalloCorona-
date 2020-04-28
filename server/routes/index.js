const express = require("express");
const { authenticated } = require("../middlewares/auth");
const { mustDoctor, mustUser } = require("../middlewares/mustRole");
const { listAs } = require("../middlewares/listAs");
const { signin, signup } = require("../controllers/auth");
const {
  getAllArticles,
  getArticle,
  createArticle,
} = require("../controllers/articles");
const { getMyProfile } = require("../controllers/profile");
const {
  getAllConsultations,
  createConsultation,
  createReply,
} = require("../controllers/consultations");

const router = express.Router();

// auth
router.post("/signin", signin);
router.post("/signup", signup);

// article
router.get("/articles", getAllArticles);
router.get("/article/:id", getArticle);
router.post("/article", authenticated, mustDoctor, createArticle);

// profile
router.get("/profile", authenticated, getMyProfile);

// consultation
router.get("/consultations", authenticated, listAs, getAllConsultations);
router.post("/consultation", authenticated, mustUser, createConsultation);
router.post("/consultation/:id/reply", authenticated, mustDoctor, createReply);

module.exports = router;
