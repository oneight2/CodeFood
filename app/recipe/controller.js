const Recipes = require("./model");
const RecipeCategories = require("../recipe_category/model");
RecipeCategories.hasMany(Recipes, { foreignKey: "recipeCategoryId" });
Recipes.belongsTo(RecipeCategories, { foreignKey: "recipeCategoryId" });

module.exports = {
  findAll: async (req, res) => {
    try {
      const recipes = await Recipes.findAll({
        attributes: {
          exclude: ["ingredientsPerServing", "steps"],
        },
        include: [RecipeCategories],
      });
      res.status(200).json({
        status: true,
        message: "Success",
        data: {
          total: recipes.length,
          recipes,
        },
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  findOne: async (req, res) => {
    try {
      const { id } = req.params;
      const recipe = await Recipes.findOne({
        attributes: {
          exclude: ["steps"],
        },
        where: {
          id,
        },
        include: [RecipeCategories],
      });
      recipe.ingredientsPerServing = JSON.parse(recipe.ingredientsPerServing);
      if (recipe) {
        res.status(200).json({
          status: true,
          message: "Success",
          data: recipe,
        });
      } else {
        res.status(404).json({
          status: false,
          message: `Recipe with id ${id} not found`,
        });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  steps: async (req, res) => {
    try {
      const { id } = req.params;
      const recipe = await Recipes.findOne({
        attributes: {
          include: ["steps"],
        },
        where: {
          id,
        },
      });
      if (recipe) {
        res.status(200).json({
          status: true,
          message: "Success",
          data: JSON.parse(recipe.steps),
        });
      } else {
        res.status(404).json({
          status: false,
          message: `Steps with id ${id} not found`,
        });
      }
    } catch (err) {
      res.status(500).json({
        status: false,
        message: err.message,
      });
    }
  },
  create: async (req, res) => {
    try {
      const {
        name,
        image,
        recipeCategoryId,
        ingredientsPerServing,
        steps,
        nServing,
        nReactionLike,
        nReactionNeutral,
        nReactionDislike,
      } = req.body;
      const recipe = await Recipes.create({
        name,
        image,
        recipeCategoryId,
        ingredientsPerServing,
        steps,
        nServing,
        nReactionLike,
        nReactionNeutral,
        nReactionDislike,
      });
      res.status(201).json({
        status: true,
        message: "Success",
        data: recipe,
      });
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
      const {
        name,
        image,
        recipeCategoryId,
        ingredientsPerSaving,
        steps,
        nServing,
      } = req.body;

      const recipe = await Recipes.update(
        {
          name,
          image,
          recipeCategoryId,
          ingredientsPerSaving,
          steps,
          nServing,
          updatedAt: new Date(),
        },
        { where: { id } }
      );
      if (recipe > 0) {
        const recipe = await Recipes.findOne({
          where: {
            id,
          },
        });
        recipe.ingredientsPerServing = JSON.parse(recipe.ingredientsPerServing);
        recipe.steps = JSON.parse(recipe.steps);
        res.status(200).json({
          status: true,
          message: "Success",
          data: recipe,
        });
      } else {
        res.status(404).json({
          status: false,
          message: `Recipes with id ${id} not found`,
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
      const recipe = await Recipes.findOne({
        where: {
          id,
        },
      });
      if (recipe) {
        await Recipes.destroy({
          where: {
            id,
          },
        });
        res.status(200).json({
          status: true,
          message: "Success",
        });
      } else {
        res.status(404).json({
          status: false,
          message: `Recipes with id ${id} not found`,
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
