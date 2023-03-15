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
