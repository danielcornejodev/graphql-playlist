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

export const ADD_BOOK = gql`
    mutation ($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`;

export const GET_BOOK = gql`
  query($selectedBookId: ID){
    book(id: $selectedBookId){
      id
      name
      genre
      author{
        id
        name
        age
        books{
          name
          id
        }
      }
    }
  }
`;