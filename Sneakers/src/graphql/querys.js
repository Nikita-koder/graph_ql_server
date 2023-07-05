/*eslint-disable*/
import { gql } from '@apollo/client';

// Example
export const FIND_MANY_PRODUCTS = gql`
query Query {
    products {
      id
      name
      type
      price
      description
      qty
    }
  }
`