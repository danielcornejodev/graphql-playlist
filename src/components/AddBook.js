import { useQuery, useMutation } from '@apollo/client';
import { GET_AUTHORS, ADD_BOOK } from '../queries/queries';
import { useState } from 'react';


export default function AddBook() {
    const [newBook, setNewBook] = useState({
      name: '',
      genre: '',
      authorId: ''
    })

    function QueryAuthors() {
      const { loading, error, data } = useQuery(GET_AUTHORS);
      if (loading) {
        return 'Loading...';
      } else if (error) {
        return `Error! ${error.message}`;
      } else {
        return data.authors.map((author) => (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        ))
      }
    } 


    const [AddBookMutation, { data, loading, error }] = useMutation(ADD_BOOK);
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
  
  

    function handleNameChange(e) {
      setNewBook({
        ...newBook,
        name: e.target.value
      });
    }

    function handleGenreChange(e) {
      setNewBook({
        ...newBook,
        genre: e.target.value
      });
    }

    function handleAuthorIdChange(e) {
      setNewBook({
        ...newBook,
        authorId: e.target.value
      });
    }

    function submitForm(e){
      e.preventDefault()
      AddBookMutation({ variables: { 
        name: newBook.name,
        genre: newBook.genre,
        authorId: newBook.authorId
       } });
    }

    return (
      <>
      <form onSubmit={ submitForm }>
        <div className="field">
          <label>
            Book name:
          </label>
          <input type="text" onChange={handleNameChange}/>
        </div>
        <div className="field">
          <label>
            Genre:
          </label>
          <input type="text" onChange={handleGenreChange}/>
        </div>
        <div>
          <label>Author:</label>
          <select name='author' onChange={handleAuthorIdChange}>
          <option>Select Author</option>
          {QueryAuthors()}
          </select>
        </div>
        <button>+</button>
      </form>  
      </>
    );
  }