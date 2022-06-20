import { gql } from "apollo-server-express";

const Schema = gql`
  type Person {
    id: ID!
    name: String
    lastName: String
  }

  type Query {
    getAllPeople: [Person]
    getPerson(id: Int): Person
  }

  type Mutation {
    addPerson(name: String, lastName: String): Person
  }
`;

export default Schema;
