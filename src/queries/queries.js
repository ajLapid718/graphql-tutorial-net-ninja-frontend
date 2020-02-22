import { gql } from "apollo-boost";

const getBooksQuery = gql`
  query  {
    books {
      name
      id
    }
  }
`;

const getAuthorsQuery = gql`
  query {
    authors {
      name
      id
    }
  }
`;

const addBookMutation = gql`
  mutation {
    addBook(name: "", genre: "", authorId: "") {
      name
      id
    }
  }
`

export { getAuthorsQuery, getBooksQuery, addBookMutation };