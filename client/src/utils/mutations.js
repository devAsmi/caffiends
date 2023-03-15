import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($name: String!, $username: String!, $password: String!) {
    addUser(name: $name, username: $username, password: $password) {
      token
      user {
        userId
        name
        username
      }
    }
  }
`;

export const CREATE_ORDER = gql`
  mutation createOrder(
    $items: [ID]!
    $orderDate: String
    $points: Int
    $total: Float
  ) {
    createOrder(
      items: $items
      orderDate: $orderDate
      points: $points
      total: $total
    ) {
      orderDate
      points
      items {
        name
        _id
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token
      user {
        userId
        name
      }
    }
  }
`;
