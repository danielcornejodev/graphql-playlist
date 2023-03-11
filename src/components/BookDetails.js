import { useQuery } from '@apollo/client';
import { GET_BOOK } from '../queries/queries';

export default function BookDetails({ selectedBookId }) {
    const { loading, error, data: book } = useQuery(GET_BOOK);
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    function displayBookDetails(){
        if(book){
            return(
                <div>
                    <h2>{ book.name }</h2>
                    <p>{ book.genre }</p>
                    <p>{ book.author.name }</p>
                    <p>All books by this author:</p>
                    <ul className="other-books">
                        { book.author.books.map(item => {
                            return <li key={item.id}>{ item.name }</li>
                        })}
                    </ul>
                </div>
            );
        } else {
                return(
                    <div>No book selected...</div>
                );
            }
        }
  
    return (
        <div id='book-details'>
            Book Details here
        </div>
    );
  }