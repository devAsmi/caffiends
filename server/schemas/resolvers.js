const { AuthenticationError } = require("apollo-server-express");
const { Item } = require("../models");

const resolvers = {
  Query: {
    items: async () => Item.find().populate("itemType"),
    itemsForType: async (parent, { itemType }) =>
      (await Item.find().populate("itemType")).filter(
        (item) => item.itemType.name === itemType
      ),
  },
};

module.exports = resolvers;
