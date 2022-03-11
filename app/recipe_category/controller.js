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
      if (name.length > 0) {
        const recipeCategory = await RecipeCategories.create({ name });
        res.status(201).json({
          status: true,
          message: "Success",
          data: recipeCategory,
        });
      } else {
        res.status(400).json({
          status: false,
          message: "name is required",
        });
      }
    } catch (err) {
      res.status(500).json({
        status: false,
        message: err.message,
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      if (name.length > 0) {
        await RecipeCategories.update(
          { name, updatedAt: new Date() },
          { where: { id } }
        );
        const recipeCategory = await RecipeCategories.findOne({
          where: {
            id,
          },
        });
        if (recipeCategory) {
          res.status(200).json({
            status: true,
            message: "Success",
            data: recipeCategory,
          });
        } else {
          res.status(404).json({
            status: false,
            message: `Recipe category with id ${id} not found`,
          });
        }
      } else {
        res.status(400).json({
          status: false,
          message: "name is required",
        });
      }
    } catch (err) {
      res.status(500).json({
        status: false,
        message: err.message,
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const recipeCategory = await RecipeCategories.findOne({
        where: {
          id,
        },
      });
      if (recipeCategory) {
        await RecipeCategories.destroy({
          where: {
            id,
          },
        });
        res.status(200).json({
          status: true,
          message: "Success",
          data: {},
        });
      } else {
        res.status(404).json({
          status: false,
          message: `Recipe category with id ${id} not found`,
        });
      }
    } catch (err) {
      res.status(500).json({
        status: false,
        message: err.message,
      });
    }
  },
};
