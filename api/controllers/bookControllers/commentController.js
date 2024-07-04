import Comment from '../../models/books/Comment.js';
import Book from '../../models/books/Book.js';

const createComment = async (req, res) => {
  const newComment = {
    comment: req.body.comment,
    user: req.user.id,
    book: req.params.bookId,
  };
  try {
    const comment = await Comment.create(newComment);
    return res.json({
      comment,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: 'Error creating comment',
      error,
    });
  }
};

const getCommentsByBookId = async (req, res) => {
  const { bookId } = req.params;

  const books = await Comment.find({
    book: bookId,
  });

  return res.json({
    books,
  });
};

const deleteCommentById = async (req, res) => {
  const { commentId, bookId } = req.params;
  const book = await Book.findById(bookId);
  const comment = await Comment.findById(commentId);

  const userId = req.user.id;
  if (userId == book.author.id || userId == comment.user) {
    const deleted = await Comment.findByIdAndDelete(commentId);
    return res.json({
      msg: 'Comment deleted',
      deleted,
    });
  } else {
    return res.status(403).json({
      msg: 'Invalid permission',
    });
  }
};

export { createComment, getCommentsByBookId, deleteCommentById };
