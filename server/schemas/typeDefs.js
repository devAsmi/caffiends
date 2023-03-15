const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type ItemType {
    _id: ID
    name: String
  }

  type Item {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    points: Int
    itemType: ItemType
  }

  type History {
    history_id: ID
    items: [Item]
    total: Int
    points: Int
  }

  type User {
    userId: ID
    name: String
    username: String
    points: Int
    referralCode: String
    orderHistory: [History]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Checkout {
    session: ID
  }

  type Query {
    items: [Item]
    itemsForType(itemType: String): [Item]
    users: [User]!
    user(userId: ID!): User
    self: User
    checkout(items: [ID]!, total: Float, points: Float): Checkout
  }

  type Mutation {
    addUser(name: String!, username: String!, password: String!): Auth
    updateUser(name: String, username: String, password: String, points: Int): User
    loginUser(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
