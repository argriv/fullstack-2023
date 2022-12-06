import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation Register($username: String!, $secret: String!) {
    register(username: $username, secret: $secret) {
      username
    }
  }
`;
export const LOGIN_USER = gql`
  mutation LoginResolver($username: String!, $secret: String!) {
    loginResolver(username: $username, secret: $secret) {
      userId
      username
      token
      isAdmin
    }
  }
`;
