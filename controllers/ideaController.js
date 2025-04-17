const Idea = require("../models/ideaModel");

// POST /ideas
const addIdea = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newIdea = await Idea.create({ title, description });
    res.status(201).json(newIdea);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /ideas
const getIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.status(200).json(ideas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addIdea, getIdeas };
