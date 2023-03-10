const { AuthenticationError } = require("apollo-server-express");
const { Item, User } = require("../models");
const { signToken } = require("../utils/Auth");
const resolvers = {
  Query: {
    items: async () => Item.find().populate("itemType"),
    itemsForType: async (parent, { itemType }) =>
      (await Item.find().populate("itemType")).filter(
        (item) => item.itemType.name === itemType
      ),
    users: async () => {
      return Userfind();
    },

    user: async (parent, { userId }) => {
      return await User.findOne({ userId: userId });
    },

    self: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ userId: context.user.id });
      }
      throw new AuthenticationError("Please login");
    },
  },

  Mutation: {
    addUser: async(parent, args)=> {
      const user = await User.create(args);
      const token = signToken(user);
      return {token,user};
    },

    loginUser: async (parent, { username, password }) => {
      const user = await User.findOne({username });

      if (!user) {
        throw new AuthenticationError("Please create a membership");
      }

      const correctPass = await User.isCorrectPassword(password);

      if (!correctPass) {
        throw new AuthenticationError("Password is not correct!");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
