/**
 * body {
 *  role: author | reader
 *  user: {
 *
 *  }
 *
 * }
 *
 *
 */
import Author from '../models/books/Author.js';
import Reader from '../models/books/Reader.js';
import bcrypt from 'bcrypt';

const register = async (req, res) => {
  const role = req.body;
  let newUser = null;
  const { user } = req.body;
  user.password = bcrypt.hash(user.password, 10);
  try {
    if (role === 'author') {
      newUser = await Author.create(user);
    } else if (role === 'reader') {
      newUser = await Reader.create(user);
    }
    user.password = undefined;
    return res.json({
      msg: 'User created',
      user,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error creating user',
      error,
    });
  }
};

const login = (req, res) => {};

export { register, login };
