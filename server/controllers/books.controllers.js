import Book from "../models/Books.model.js";

export async function createBook(req, res) {
    try {
        const newBook = await Book.create(req.body);
        res.json(newBook);
    }
    catch(error) {
        console.log(error)
        res.status(400).json(error)
    }
};


// Controller to get all books
export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find(); 
        res.status(200).json(books);     
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getBookById = async (req, res) => {
    try {
        const bookTitle = req.params.id;
        const book = await Book.findById( bookTitle )

        return res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};



export const deleteBookById = async (req, res) => {
    try {
        const bookId = req.params.id;
        const deletedBook = await Book.findByIdAndDelete(bookId);

        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateBookById = async (req, res) => {
    try {
      const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.status(200).json(updatedBook);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}