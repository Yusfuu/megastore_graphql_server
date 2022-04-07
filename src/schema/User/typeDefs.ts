import { gql } from "apollo-server-express";

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  enum Role {
    USER
    SELLER
    ADMIN
  }

  enum AccountStatus {
    ACTIVE
    INACTIVE
  }

  enum TypeAccountEnum {
    BASIC
    STARTER
    PRO
    EXPERT
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    role: Role!
    isSeller: Boolean!
    AccountStatus: AccountStatus!
    Store: Store
    typeAccount: TypeAccountEnum
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  union AuthResult = AuthPayload | User

  type Mutation {
    register(input: UserInput): AuthPayload
    login(email: String!, password: String!): AuthPayload
    updatePassword(oldPassword: String!, newPassword: String!): User
  }
`;
