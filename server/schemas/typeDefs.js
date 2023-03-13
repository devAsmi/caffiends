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


  type User{
    userId: ID
    name: String
    email: String
    password: String
  }

  type Auth{
    token: ID!
    user:User
  }

  type Query {
    items: [Item]
    itemsForType(itemType: String): [Item]
    users:[User]!
    user(userId: ID!): User
    self: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!) : 
    Auth updateUser(
      name:String
      email:String
      password: String
    ):
    User
    login(
      email:String!
      password:String!
    ):Auth

  }
`;

module.exports = typeDefs;
