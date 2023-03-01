import { gql, useQuery } from '@apollo/client';

const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      name
      id
    }
  }
`;

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
        {data.authors.map((author) => (
          <>
          <option>Select Author</option>
          <option key={author.id} value={author.name}>
            {author.name}
          </option>
          </>
        ))}
      </select>
      </>
    );
  }