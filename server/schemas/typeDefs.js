const { gql } = require("apollo-server-express");

const typeDefs = gql`
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
    items: [Items]
    total: Int
    points: Int
  }
`;

module.exports = typeDefs;
