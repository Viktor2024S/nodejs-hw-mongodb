import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { registerUserController } from '../controllers/auth.js';
import { registerUserSchema } from '../validation/auth.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  registerUserController,
);

export default router;
