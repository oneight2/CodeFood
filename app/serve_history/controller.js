const ServeHistory = require("./model");
var randomstring = require("randomstring");
const Recipes = require("../recipe/model");
const RecipeCategories = require("../recipe_category/model");
RecipeCategories.hasMany(Recipes, { foreignKey: "recipeCategoryId" });
Recipes.belongsTo(RecipeCategories, { foreignKey: "recipeCategoryId" });

module.exports = {
  create: async (req, res) => {
    try {
      const { nServing, recipeId } = req.body;
      const userId = req.user.id;
      const random = randomstring.generate({
        length: 4,
        capitalization: "uppercase",
      });
      const recipe = await Recipes.findOne({
        where: { id: recipeId },
        include: [RecipeCategories],
      });

      recipe.steps = JSON.parse(recipe.steps);

      const serveHistory = await ServeHistory.create({
        id: random,
        userId,
        nServing,
        recipeId,
        recipeCategoryId: recipe.recipeCategoryId,
        recipeName: recipe.name,
        recipeCategoryName: recipe.RecipeCategory.name,
        recipeImage: recipe.image,
        steps: recipe.steps,
        nStep: recipe.steps.length,
        nStepDone: 0,
        reaction: null,
      });
      res.status(200).json({
        status: true,
        message: "Success",
        data: serveHistory,
      });
    } catch (err) {
      res.status(500).json({ status: false, message: err.message });
    }
  },
};
