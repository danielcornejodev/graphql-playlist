import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../queries/queries';
import BookDetails from './BookDetails';

export default function Booklist() {
    const { loading, error, data } = useQuery(GET_BOOKS);
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    return (
      <>
      <ul>
      {data.books.map((book) => (
        <li key={book.id}>{book.name}</li>
        ))}
      </ul>
      <BookDetails />
      </>
    );
  }