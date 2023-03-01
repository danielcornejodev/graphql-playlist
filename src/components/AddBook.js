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
  console.log(data);
    return (
        <>
      <select name='author' onChange={onAuthorSelected}>
        {data.authors.map((author) => (
          <option key={author.id} value={author.name}>
            {author.name}
          </option>
        ))}
      </select>
      </>
    );
  }