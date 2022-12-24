import { gql } from "@apollo/client";

export const PRODUCTS_MANY = gql`
  query Products_Many($filter: FilterFindManyProductsInput) {
    Products_Many(filter: $filter) {
      created
      title
      text
      price
      rating
      positions
      _id
      created_at
      updated_at
    }
  }
`;
