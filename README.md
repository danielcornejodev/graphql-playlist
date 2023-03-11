# Reading List Full Stack app

Client:
AddBook a React component that allows a user to add a book to a library application. It uses the Apollo Client library for GraphQL to handle queries and mutations.

The component contains a form with three fields: book name, genre, and author. The author field is a drop-down list populated by a GraphQL query that fetches all authors in the database. When the user submits the form, a GraphQL mutation is used to add the new book to the database. The form also includes error handling for loading and submission errors.

Overall, this code demonstrates how to use Apollo Client to handle GraphQL queries and mutations in a React application. 


BookList is a React component that displays a list of books and allows the user to select a book to view more details. It uses the Apollo Client library for GraphQL to handle queries.

The component contains a useQuery hook that fetches all books from the database using the GET_BOOKS query. The data, loading, and error properties are destructured from the hook's return value. The component also uses the useState hook to define the initial state of the selectedBookId variable, which is used to track which book the user has selected.

When the component is rendered, the data.books array is mapped to a list of li tag elements, each displaying the name of a book. When a book is clicked, the setSelectedBookId function is called to update the selectedBookId state variable to the id of the clicked book.

The component also renders a BookDetails component, passing in the selectedBookId state variable as a prop. This component is responsible for fetching the details of the selected book using another GraphQL query and rendering them on the screen.

Overall, this code demonstrates how to use Apollo Client to handle GraphQL queries in a React application and how to manage state using the useState hook. It also shows how to pass data between components using props.



Server:
This code is setting up a server for a GraphQL API using the express framework and graphql-yoga. It also connects to a MongoDB database using mongoose.

The schema is imported from a file that defines the GraphQL schema using the GraphQL.js library. The cors package is used to allow cross-origin requests.

After setting up the server and connecting to the database, the server is started with server.listen() on port 5500. When a request is made to this port, the GraphQL API will respond with the appropriate data based on the defined schema and the query in the request.
