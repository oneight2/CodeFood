const RecipeCategories = require("./model");

module.exports = {
  findAll: async (req, res) => {
    try {
      const categories = await RecipeCategories.findAll();
      res.status(200).json({
        status: true,
        message: "Success",
        data: categories,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  create: async (req, res) => {
    try {
      const { name } = req.body;
      const recipeCategory = await RecipeCategories.create({ name });
      res.status(201).json({
        status: true,
        message: "Success",
        data: recipeCategory,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error creating recipe category",
        error,
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      await RecipeCategories.update(
        { name, updatedAt: new Date() },
        { where: { id } }
      );
      const recipeCategory = await RecipeCategories.findOne({
        where: {
          id,
        },
      });
      res.status(200).json({
        status: true,
        message: "Success",
        data: recipeCategory,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error updating recipe category",
        error,
      });
    }
  },
};
