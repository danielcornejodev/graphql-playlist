import { useQuery } from '@apollo/client';
import { GET_BOOK } from '../queries/queries';

export default function BookDetails() {
    const { loading, error, data } = useQuery(GET_BOOK);
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    return (
        <div id='book-details'>
            <p>Insert Book Details Here</p>
        </div>
    );
  }