const Recipes = require("../recipe/model");
const { Op } = require("sequelize");

module.exports = {
  search: async (req, res) => {
    try {
      const { limit, q } = req.query;
      let query = limit ? parseInt(limit) : 5;

      if (q.length >= 2) {
        const recipes = await Recipes.findAll({
          attributes: {
            exclude: [
              "steps",
              "ingredientsPerServing",
              "recipeCategoryId",
              "createdAt",
              "updatedAt",
              "nServing",
              "nReactionLike",
              "nReactionNeutral",
              "nReactionDislike",
              "image",
            ],
          },
          where: {
            name: {
              [Op.like]: `%${q}%`,
            },
          },
          limit: query,
        });

        res.status(200).json({
          status: true,
          message: "Success",
          data: recipes,
        });
      } else {
        res.status(500).json({
          status: false,
          message: "Search query minimum 2 character",
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
