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
    _id: ID
    items: [Item]
    total: Int
    points: Int
    orderDate: String
  }

  type User {
    userId: ID
    name: String
    username: String
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
    updateUser(name: String, username: String, password: String): User
    loginUser(username: String!, password: String!): Auth
    createOrder(
      orderDate: String
      points: Int
      total: Float
      items: [ID]
    ): History
  }
`;

module.exports = typeDefs;
