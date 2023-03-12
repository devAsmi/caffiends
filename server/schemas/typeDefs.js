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

  type Query {
    items: [Item]
    itemsForType(itemType: String): [Item]
  }
`;

module.exports = typeDefs;
