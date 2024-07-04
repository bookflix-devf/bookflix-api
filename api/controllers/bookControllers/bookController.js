import Service from '../../services/Service.js';
import Book from '../../models/books/Book.js';
import Author from '../../models/books/Author.js';

const bookService = new Service(Book);

const createBook = async (req, res) => {
  try {
    const author = await Author.findById(req.body.authorId);
    if (!author) {
      return res.status(404).json({
        msg: 'Author not found',
      });
    }
    const newBook = await bookService.create(req.body);
    return res.json({
      msg: 'Book created',
      book: newBook,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error creating book',
      error,
    });
  }
};

//TODO getAllBooksfiltered

//TODO getBookInfoById

const getBookInfoById = async (req, res) => {
  const { bookId } = req.params;
  try {
    const book = await Book.findById(bookId).populate(
      'author',
      '-password -email'
    );
    if (!book) {
      return res.status(404).json({
        msg: 'Book not found',
      });
    }

    return res.json({
      msg: 'Book found',
      book,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error finding book by id',
      error,
    });
  }
};

export { createBook, getBookInfoById };
