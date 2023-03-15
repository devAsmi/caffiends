const { AuthenticationError } = require("apollo-server-express");
const { Item, User, History } = require("../models");
const { signToken } = require("../utils/Auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
const randomstring = require("randomstring");

const resolvers = {
  Query: {
    items: async () => Item.find().populate("itemType"),
    itemsForType: async (parent, { itemType }) =>
      (await Item.find().populate("itemType")).filter(
        (item) => item.itemType.name === itemType
      ),
    users: async () => {
      return User.find().populate("orderHistory").populate({
        path: "orderHistory",
        populate: "items",
      });
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new History({
        items: args.items,
        total: args.total,
        points: args.points,
      });
      const line_items = [];

      const { items } = await order.populate("items");

      for (let i = 0; i < items.length; i++) {
        const item = await stripe.products.create({
          name: items[i].name,
          description: items[i].description,
          images: [items[i].image],
        });

        const price = await stripe.prices.create({
          product: item.id,
          unit_amount: items[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });
      return { session: session.id };
    },
    user: async (parent, { userId }) => {
      return await User.findOne({ userId: userId }).populate({
        path: "orderHistory",
        populate: "items",
      });
    },
    self: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ userId: context.user.userId }).populate("orderHistory");
      }
      throw new AuthenticationError("Please login");
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      console.log("LINE 29 RESOLVERS", args);
      const user = await User.create({
        name: args.name,
        username: args.username,
        password: args.password,
        points: 0,
        referralCode: randomstring.generate(10),
      });
      const token = signToken(user);
      return { token, user };
    },

    loginUser: async (parent, { username, password }) => {
      console.log("LINE 36 RESOLVERS", username, password);
      const user = await User.findOne({ username: username });

      if (!user) {
        throw new AuthenticationError("Please create a membership");
      }

      const correctPass = await user.isCorrectPassword(password);

      console.log(user);
      if (!correctPass) {
        throw new AuthenticationError("Password is not correct!");
      }
      const token = signToken(user);
      console.log(token);
      return { token, user };
    },
    createOrder: async (
      parent,
      { orderDate, points, total, items },
      context
    ) => {
      const order = await History.create({
        orderDate: orderDate,
        points: points,
        total: total,
        items: items,
      });

      // if we have userId for the order, we need to update User collection too
      if (context.user) {
        const userData = await User.findOneAndUpdate(
          { userId: context.user.userId },
          {
            $push: { orderHistory: order._id },
          },
          { new: true }
        );
      }

      return await order.populate("items");
    },
  },
};

module.exports = resolvers;
