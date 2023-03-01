import Booklist from './components/BookList';
import AddBook from './components/AddBook';
import { useQuery, gql } from '@apollo/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: 'http://localhost:5500/graphql',
  cache: new InMemoryCache(),
});


export default function App() {
  return (
    <ApolloProvider client={client}>
      <div id="name">
        <h1>Reading List</h1>
        <Booklist />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

