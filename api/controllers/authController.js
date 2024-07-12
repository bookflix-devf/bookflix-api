import Author from '../models/books/Author.js';
import Reader from '../models/books/Reader.js';
import bcrypt from 'bcrypt';
import User from '../models/books/User.js';
import jwt from 'jwt-simple';
import { token as tokenConfig } from '../config/index.js';

const register = async (req, res) => {
  const { role } = req.body;
  let newUser = null;
  const { user } = req.body;
  user.password = await bcrypt.hash(user.password, 10);
  try {
    if (role === 'author') {
      newUser = await Author.create(user);
    } else if (role == 'reader') {
      newUser = await Reader.create(user);
    }
    newUser.password = undefined;
    return res.json({
      msg: 'User created',
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error creating user',
      error,
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
  });

  if (!user) {
    return res.status(404).json({
      msg: 'User not found',
    });
  }

  const passwordMatched = await bcrypt.compare(password, user.password);

  if (passwordMatched) {
    //CREAR TOKEN
    const payload = {
      userId: user.id,
    };

    const token = jwt.encode(payload, tokenConfig.secret);

    return res.json({
      msg: 'login success',
      token,
    });
    //MADNAR TOKEN
  } else {
    return res.status(401).json({
      msg: 'Invald credentials',
    });
  }
};

const me = (req, res) => {
  return res.json({
    user: req.user,
  });
};

export { register, login, me };
