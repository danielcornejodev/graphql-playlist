import { useQuery } from '@apollo/client';
import { GET_AUTHORS } from '../queries/queries';
import { useState } from 'react';


export default function AddBook() {
    const { loading, error, data } = useQuery(GET_AUTHORS);
    const [Name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [authorId, setAuthorId] = useState("");
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
      <>
      <form>
        <div className="field">
          <label>
            Book name:
          </label>
          <input type="text" onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="field">
          <label>
            Genre:
          </label>
          <input type="text" onChange={(e) => setGenre(e.target.value)}/>
        </div>
        <div>
          <label>Author:</label>
          <select name='author' onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select Author</option>
          {data.authors.map((author) => (
              <option key={author.id} value={author.name}>
                {author.name}
              </option>
            ))}
          </select>
        </div>
        <button>+</button>
      </form>  
      </>
    );
  }