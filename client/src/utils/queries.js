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

export const QUERY_CHECKOUT = gql`
  query getCheckout($items: [ID]!, $total: Float, $points: Float) {
    checkout(items: $items, total: $total, points: $points) {
      session
    }
  }
`;

export const QUERY_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      userId
      name
      password
    }
  }
`;

export const Query_SELF = gql`
  query self {
    self {
      userId
      username
    }
  }
`;

export const QUERY_USERS = gql `
  query Users {
    users {
      name
      orderHistory {
        points
        total
      }
      points
      referralCode
      userId
      username
    }
  }
`;
