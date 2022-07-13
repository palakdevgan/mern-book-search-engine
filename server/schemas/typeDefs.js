const { gql } = require('apollo-server-express');


const typeDefs = gql`
input BookInput{
  bookId:String
  authors:[String]
  description: String
  title: String
  image: String
  link:String
}

type Book {
  bookId:String
  authors:[String]
  description: String
  title: String
  image: String
  link:String
}

type User {
  _id: ID
  username: String
  email: String
  bookCount: Int
  savedBooks: [Book]
}

type Auth {
  token: ID!
  user: User
}

type Query {
    me:User
    user(username: String!): User
    // user(_id: ID!): User
  }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput): User
    removeBook(bookId: ID!): User
  }  
`;


module.exports = typeDefs;