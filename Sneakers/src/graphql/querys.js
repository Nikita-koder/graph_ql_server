/*eslint-disable*/
import { gql } from '@apollo/client';

// Example
export const FIND_MANY_PRODUCTS = gql`
    query FindManyProducts {
        findManyProducts {
            categories {
            category_id
            category_name
            }
            category_id
            description
            price
            product_id
            product_name
        }
    }
`