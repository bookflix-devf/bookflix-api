import { Router } from 'express';
import { register, login, me } from '../controllers/authController.js';
import validateBody from '../middlewares/validateBody.js';
import registerUserSchema from '../validators/registerUserSchema.js';
import { authUser } from '../middlewares/authValidator.js';

const authRouter = Router();

authRouter.post('/register', validateBody(registerUserSchema), register);
authRouter.post('/login', login);
authRouter.get('/me', authUser(['author', 'reader']), me);

export default authRouter;
