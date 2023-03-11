const { AuthenticationError } = require("apollo-server-express");
const { ItemType, Item } = require("../models");

const resolvers = {
  Query: {
    items: async () => Item.find().populate("itemType"),
  },
};

module.exports = resolvers;
