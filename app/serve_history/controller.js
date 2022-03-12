const ServeHistory = require("./model");
const { Op } = require("sequelize");

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

      if (recipe) {
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
      } else {
        res.status(400).json({
          status: false,
          message: "Recipe not found",
        });
      }
    } catch (err) {
      res.status(500).json({ status: false, message: err.message });
    }
  },
  updateStepOrder: async (req, res) => {
    try {
      const { stepOrder } = req.body;
      const serveHistory = await ServeHistory.findOne({
        where: { id: req.params.id },
      });
      if (serveHistory) {
        serveHistory.steps = JSON.parse(serveHistory.steps);
        serveHistory.nStepDone = serveHistory.nStepDone + 1;
        const step = serveHistory.steps;
        step.map((item) => {
          if (item.stepOrder === stepOrder) {
            item.done = true;
          }
        });

        const updateServe = await ServeHistory.update(
          { steps: step, nStepDone: serveHistory.nStepDone },
          { where: { id: req.params.id } }
        );
        if (updateServe) {
          res.status(200).json({
            status: true,
            message: "Success",
            data: serveHistory,
          });
        }
      } else {
        res.status(400).json({
          status: false,
          message: "Serve history not found",
        });
      }
    } catch (err) {
      res.status(500).json({ status: false, message: err.message });
    }
  },
  updateReaction: async (req, res) => {
    try {
      const { reaction } = req.body;
      const serveHistory = await ServeHistory.findOne({
        where: { id: req.params.id },
      });
      if (serveHistory) {
        serveHistory.reaction = reaction;
        serveHistory.steps = JSON.parse(serveHistory.steps);
        const updateServe = await ServeHistory.update(
          { reaction },
          { where: { id: req.params.id } }
        );
        if (updateServe) {
          res.status(200).json({
            status: true,
            message: "Success",
            data: serveHistory,
          });
        }
      } else {
        res.status(400).json({
          status: false,
          message: "Serve history not found",
        });
      }
    } catch (err) {
      res.status(500).json({ status: false, message: err.message });
    }
  },
  historyDetail: async (req, res) => {
    try {
      const { id } = req.params;
      const serveHistory = await ServeHistory.findOne({
        where: { id },
      });
      if (serveHistory) {
        serveHistory.steps = JSON.parse(serveHistory.steps);
        res.status(200).json({
          status: true,
          message: "Success",
          data: serveHistory,
        });
      } else {
        res.status(400).json({
          status: false,
          message: "Serve history not found",
        });
      }
    } catch (err) {
      res.status(500).json({ status: false, message: err.message });
    }
  },
  listHistory: async (req, res) => {
    try {
      const { q, categoryId, sort, limit, skip, status } = req.query;
      let query = limit ? parseInt(limit) : 5;
      let offset = skip ? parseInt(skip) : 0;
      console.log("anjing", req.query);
      if (Object.keys(req.query).length > 0) {
        const serveHistory = await ServeHistory.findAll({
          attributes: {
            exclude: ["steps", "userId"],
          },
          where: {
            [Op.or]: [
              {
                recipeName: {
                  [Op.like]: `%${q}%`,
                },
              },
              {
                recipeCategoryId: {
                  [Op.like]: `%${categoryId}%`,
                },
              },
              {
                status: {
                  [Op.like]: `%${status}%`,
                },
              },
            ],
          },
          limit: query,
          offset: offset,
        });
        if (serveHistory) {
          res.status(200).json({
            status: true,
            message: "Success",
            data: {
              total: serveHistory.length,
              history: serveHistory,
            },
          });
        } else {
          res.status(400).json({
            status: false,
            message: "Serve history not found",
          });
        }
      } else {
        const serveHistory = await ServeHistory.findAll({
          attributes: {
            exclude: ["steps", "userId"],
          },
        });
        if (serveHistory) {
          res.status(200).json({
            status: true,
            message: "Success",
            data: {
              total: serveHistory.length,
              history: serveHistory,
            },
          });
        } else {
          res.status(400).json({
            status: false,
            message: "Serve history not found",
          });
        }
      }
    } catch (err) {
      res.status(500).json({ status: false, message: err.message });
    }
  },
};
