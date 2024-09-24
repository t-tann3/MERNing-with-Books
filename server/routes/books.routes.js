import Router from 'express';
import { deleteBookById, createBook, getAllBooks, updateBookById, getBookById } from '../controllers/books.controllers.js';

const router = Router();

// POST route to add a new book
router.post('/books/AddBook', createBook);

router.get('/books', getAllBooks);

router.get('/books/:id', getBookById);

router.delete('/books/:id', deleteBookById);

router.put('/books/:id', updateBookById)

export default router;
