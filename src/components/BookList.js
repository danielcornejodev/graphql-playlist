import { gql, useQuery } from '@apollo/client';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      name
      id
    }
  }
`;

export default function Booklist({ onBookSelected }) {
    const { loading, error, data } = useQuery(GET_BOOKS);
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    return (
      <select name='book' onChange={onBookSelected}>
        {data.books.map((book) => (
          <option key={book.id} value={book.genre}>
            {book.genre}
          </option>
        ))}
      </select>
    );
  }