import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DisplayAllBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/books')
            .then((response) => {
            setBooks(response.data); 
        }) 
            .catch((error) => {
            console.error('Error fetching books:', error);
        });
    }, []);

    return (
        <div className="container-fluid mt-5">
        <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Page Count</th>
                <th scope="col">Available?</th>
                <th scope="col">Book Details</th>
            </tr>
            </thead>
            <tbody>
            {books.map((book, index) => (
                <tr key={book._id}>
                <th scope="row">{index + 1}</th>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.pages}</td>
                <td>{book.isAvailable ? 'Yes' : 'No'} | <Link to={`/books/update/${book._id}`}>Edit</Link></td>
                <td><Link to={`/BookDetails/${book._id}`}>Book Details</Link>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    };


export default DisplayAllBooks


