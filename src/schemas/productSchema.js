const { gql } = require('apollo-server');

const typeDefs = gql`
  type Product {
    _id: ID!
    name: String!
    description: String!
    price: Float!
    stock: Int!
  }

  type Query {
    products: [Product]
  }

  type Mutation {
    createProduct(
      name: String!,
      description: String,
      price: Float!,
      stock: Int,
    ): Product

    updateProduct(
      _id: ID!,
      name: String,
      description: String,
      price: Float,
      stock: Int,
    ): Product

    deleteProduct(_id: ID!): Product
  }
`;

module.exports = typeDefs;
