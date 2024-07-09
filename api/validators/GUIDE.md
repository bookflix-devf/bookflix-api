1. Crear Schema en carpeta validators
2. Modificar Ruta que quieras validar el body (agregar middleware validateBody) ejemplo:

```js
import { Router } from 'express';
import { register, login } from '../controllers/authController.js';
import validateBody from '../middlewares/validateBody.js';
import registerUserSchema from '../validators/registerUserSchema.js';
const authRouter = Router();

authRouter.post('/register', validateBody(registerUserSchema), register);
authRouter.post('/login', login);

export default authRouter;
```
