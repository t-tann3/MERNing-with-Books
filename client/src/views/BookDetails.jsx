import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookDetails = () => {
  const { id } = useParams();  
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookDetails = () => {
      axios.get(`http://localhost:8000/api/books/${id}`)
        .then((response) => {
          setBook(response.data);
        })
        .catch((error) => {
          console.error('Error fetching book:', error);
        });
    };
    fetchBookDetails();
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/books/${id}`)
      .then(() => {
        navigate('/CatalogOfBooks'); // Redirect to book catalog after deletion
      })
      .catch((error) => {
        console.error('Error deleting book:', error.response ? error.response.data : error.message);
      });
  };

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Page Count: {book.pages}</p>
      <p>Available: {book.isAvailable ? 'This book is available' : 'This book is not available'}</p>
      <button onClick={handleDelete}>Borrow</button> {/* Renamed to handleDelete */}
    </div>
  );
};

export default BookDetails;
