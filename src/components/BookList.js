import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../queries/queries';

export default function Booklist({ onBookSelected }) {
    const { loading, error, data } = useQuery(GET_BOOKS);
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    return (
        <>
      {/* <select name='book' onChange={onBookSelected}>
        {data.books.map((book) => (
          <option key={book.id} value={book.name}>
            {book.name}
          </option>
        ))}
      </select> */}
      <ul>
      {data.books.map((book) => (
        <li key={book.id}>{book.name}</li>
        ))}
      </ul>
      </>
    );
  }