import { useQuery } from '@apollo/client';
import { GET_BOOK } from '../queries/queries';

export default function BookDetails({ selectedBookId }) {
    const { loading, error, data } = useQuery(GET_BOOK, {
        variables: { selectedBookId },
      });
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    console.log(data);

    function displayBookDetails(){
        if(data.book){
            return(
                <div>
                    <h2>{ data.book.name }</h2>
                    <p>{ data.book.genre }</p>
                    <p>{ data.book.author.name }</p>
                    <p>All books by this author:</p>
                    <ul className="other-books">
                        { data.book.author.books.map(item => {
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
            { displayBookDetails() }
        </div>
    );
  }