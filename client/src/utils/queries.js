import { gql } from "@apollo/client";

export const QUERY_ITEMS = gql`
  query getItems {
    items {
      _id
      image
      name
      description
      price
      points
      itemType {
        _id
        name
      }
    }
  }
`;
