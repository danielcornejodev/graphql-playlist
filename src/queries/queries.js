import { gql } from '@apollo/client';

export const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      name
      id
    }
  }
`;

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      name
      id
      genre
    }
  }
`;