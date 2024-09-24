import { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);
  const [errors, setErrors] = useState({});

  
  const validateField = (name, value) => {
    const newErrors = { ...errors };

    if (name === 'title') {
      if (value.length < 2 || value.length > 255) {
        newErrors.title = "Title must be between 2 and 255 characters";
      } else {
        delete newErrors.title;
      }
    }

    if (name === 'author') {
      if (value.length < 5 || value.length > 255) {
        newErrors.author = "Author name must be between 5 and 255 characters";
      } else {
        delete newErrors.author;
      }
    }

    if (name === 'pages') {
      if (!value || value < 1) {
        newErrors.pages = "Page count must be at least 1";
      } else {
        delete newErrors.pages;
      }
    }

    setErrors(newErrors); 
  };

  const postNewBook = () => {
    const newBook = {
      title,
      author,
      pages: parseInt(pages),
      isAvailable,
    };

    axios
      .post('http://localhost:8000/api/books/AddBook', newBook)
      .then((response) => {
        if (response.status === 200) {
          console.log('Book added successfully');
          setTitle('');
          setAuthor('');
          setPages('');
          setIsAvailable(false);
        } else {
          console.error('Failed to add book');
        }
      })
      .catch((error) => {
        console.error('Error adding book:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    postNewBook();
  };

  const validateForm = () => {
    const newErrors = {};

    if (title.length < 2 || title.length > 255) {
      newErrors.title = "Title must be between 2 and 255 characters";
    }
    if (author.length < 5 || author.length > 255) {
      newErrors.author = "Author name must be between 5 and 255 characters";
    }
    if (!pages || pages < 1) {
      newErrors.pages = "Page count must be at least 1";
    }

    return newErrors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          validateField('title', e.target.value); 
        }}
        required
      />
      {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}

      <label htmlFor="author">Author Name</label>
      <input
        type="text"
        id="author"
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
          validateField('author', e.target.value); 
        }}
        required
      />
      {errors.author && <p style={{ color: 'red' }}>{errors.author}</p>}

      <label htmlFor="pages">Page Count</label>
      <input
        type="number"
        id="pages"
        value={pages}
        onChange={(e) => {
          setPages(e.target.value);
          validateField('pages', e.target.value); 
        }}
        required
      />
      {errors.pages && <p style={{ color: 'red' }}>{errors.pages}</p>}

      <label htmlFor="isAvailable">Is It Available?</label>
      <input
        type="checkbox"
        id="isAvailable"
        checked={isAvailable}
        onChange={(e) => setIsAvailable(e.target.checked)}
      />

      <button type="submit">Add Book!</button>
    </form>
  );
};

export default AddBook;

