import { gql } from "@apollo/client";

export const CREATE_ONE_PRODUCT = gql`
mutation Mutation($data: ProductCreateInput) {
    createOneProduct(data: $data) {
      description
      id
      name
      price
      qty
      type
    }
  }
`

export const UPDATE_ONE_PRODUCT = gql`
mutation UpdateOneProduct($data: ProductUpdateInput!, $where: ProductWhereUniqueInput!) {
    updateOneProduct(data: $data, where: $where) {
      id
    }
  }
`