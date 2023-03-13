const { AuthenticationError } = require("apollo-server-express");
const { Item } = require("../models");
const {User}= require('../models/User');
const {signToken} =require ('../utils/Auth')
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
        
          user: async (_parent, { userId }) => {
            return await User.findOne({ userId: userId });
          },
        
          self: async (parent, args, context) => {
            if (context.user) {
              return Profile.findOne({ userId: context.user.id });
            }
            throw new AuthenticationError('Please login');
          },
  },
  

  Mutation: {

    login: async (parent, {email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Please create a membership');
      }

      const correctPass = await user.isCorrectPassword(password);

      if (!correctPass) {
        throw new AuthenticationError('Password is not correct!');
      }

      const token = signToken(user);
      return { token, user}
    },
  }

  
 };

module.exports = resolvers;
