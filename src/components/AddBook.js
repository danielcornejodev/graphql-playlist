import { useQuery } from '@apollo/client';
import { GET_AUTHORS } from '../queries/queries';


export default function AddBook({ onAuthorSelected }) {
    const { loading, error, data } = useQuery(GET_AUTHORS);
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
      <>
      <form>
        <div className="field">
          <label>
            Book name:
          </label>
          <input type="text" />
        </div>
        <div className="field">
          <label>
            Genre:
          </label>
          <input type="text" />
        </div>
      </form>  
      <select name='author' onChange={onAuthorSelected}>
        <option>Select Author</option>
        {data.authors.map((author) => (
          <option key={author.id} value={author.name}>
            {author.name}
          </option>
        ))}
      </select>
      </>
    );
  }