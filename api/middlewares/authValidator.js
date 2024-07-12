import jwt from 'jwt-simple';
import { token as tokenConfig } from '../config/index.js';
import User from '../models/books/User.js';

const authUser = (roles) => async (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({
      msg: 'Missing token header',
    });
  }

  try {
    const payload = jwt.decode(token, tokenConfig.secret);

    const user = await User.findById(payload.userId).select(
      '_id name firstName lastName avatar nickname'
    );

    if (!user) {
      return res.status(401).json({
        msg: 'Invalid token, user not found',
      });
    }

    const isValidRole = roles.find((role) => {
      return user.role.toUpperCase() == role.toUpperCase();
    });

    if (!isValidRole) {
      return res.status(403).json({
        msg: 'Invalid role',
      });
    }

    req.user = user;

    next();
  } catch (error) {
    console.error(error);
    return res.status(403).json({
      msg: 'Invalid token',
    });
  }
};

export { authUser };
