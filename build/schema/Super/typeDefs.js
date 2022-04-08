"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
// Construct a schema, using GraphQL schema language
exports.typeDefs = (0, apollo_server_express_1.gql) `
  input SuperInput {
    name: String!
    email: String!
    password: String!
  }

  input AdminInput {
    name: String!
    email: String!
    password: String!
  }

  input FileInput {
    files: [Upload!]
  }

  # type Image : [string]

  type Super {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    getAll: [Super!]
    getUsersAccount(role: Role, isSeller: Boolean): [User]!
    getAdminsAccount: [Admin!]
  }

  type Mutation {
    addSuper(input: SuperInput): Super!
    confirmUserIsSeller(id: ID!): User
    updateUserAccountStatus(id: ID!, status: AccountStatus!): User
    createAdmin(input: AdminInput): Admin!
    deleteUserAccount(id: ID!): User
    deleteAdminAccount(id: ID!): Admin
  }
`;
//# sourceMappingURL=typeDefs.js.map