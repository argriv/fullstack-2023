import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation Register($username: String!, $secret: String!) {
    register(username: $username, secret: $secret) {
      username
      token
    }
  }
`;
export const LOGIN_USER = gql`
  mutation Login($username: String!, $secret: String!) {
    login(username: $username, secret: $secret) {
      userId
      username
      token
      isAdmin
    }
  }
`;
