import { useParams, useNavigate} from 'react-router-dom';
import { useEffect, useState,} from 'react';
import axios from 'axios';

const UpdateBooks = () => {
  const { id } = useParams();  // Extract bookId from URL
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [isAvailable, setIsAvailable] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Logging book with id:', id)
    const getBook = () => {
        axios.get(`http://localhost:8000/api/books/${id}`)
            .then((response) => {
                setTitle(response.data.title);
                setAuthor(response.data.author);
                setPages(response.data.pages);
                setIsAvailable(response.data.isAvailable); 
    }) 

    .catch ((error) =>  {
        console.error('Error fetching book details:', error);
      })
    }
    getBook()
  }, [id]);


  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBook = {
      title: title,
      author: author,
      pages: pages,
      isAvailable: isAvailable,
    };

    axios.put(`http://localhost:8000/api/books/${id}`, updatedBook)  // Use PUT request
      .then (() => {
        console.log('Book updated successfully');
        navigate('/CatalogOfBooks')
      })
     .catch ((error) => {
      console.error('Error fetching book details:', error.response ? error.response.data : error.message);
    });

  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={title}
      />

      <label htmlFor="author">Author Name</label>
      <input
        type="text"
        id="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder={author}
      />

      <label htmlFor="pages">Page Count</label>
      <input
        type="number"
        id="pages"
        value={pages}
        onChange={(e) => setPages(e.target.value)}
        placeholder={pages}
      />

      <label htmlFor="isAvailable">Is It Available?</label>
      <input
        type="checkbox"
        id="isAvailable"
        checked={isAvailable}
        onChange={(e) => setIsAvailable(e.target.checked)}
      />

      <button type="submit">Update!</button>
    </form>
  );
};

export default UpdateBooks;
