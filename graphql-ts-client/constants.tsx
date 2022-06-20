import { gql } from "graphql-request";

const getAllPeopleQuery = gql`
  query {
    getAllPeople {
      id
      name
      lastName
    }
  }
`;

const addPersonMutation = gql`
  mutation addPerson($name: String!, $lastName: String!) {
    addPerson(name: $name, lastName: $lastName) {
      id
      name
      lastName
    }
  }
`;

export { getAllPeopleQuery, addPersonMutation };
