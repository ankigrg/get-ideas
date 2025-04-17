const express = require("express");
const router = express.Router();
const { addIdea, getIdeas } = require("../controllers/ideaController");

router.post("/ideas", addIdea);
router.get("/ideas", getIdeas);

module.exports = router;
