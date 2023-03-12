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

export const QUERY_ITEMS_FOR_TYPE = gql`
  query getItemsForType($itemType: String) {
    itemsForType(itemType: $itemType) {
      price
      points
      name
      itemType {
        name
        _id
      }
      _id
      description
      image
    }
  }
`;
