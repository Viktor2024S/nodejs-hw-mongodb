import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import {
  registerUserController,
  loginUserController,
  refreshUserController,
  logoutUserController,
  sendResetEmailController,
  resetPasswordController,
} from '../controllers/auth.js';
import {
  registerUserSchema,
  loginUserSchema,
  sendResetEmailSchema,
  resetPasswordSchema,
} from '../validation/auth.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  registerUserController,
);

router.post('/login', validateBody(loginUserSchema), loginUserController);

router.post('/refresh', refreshUserController);

router.post('/logout', logoutUserController);

router.post(
  '/send-reset-email',
  validateBody(sendResetEmailSchema),
  sendResetEmailController,
);

router.post(
  '/reset-pwd',
  validateBody(resetPasswordSchema),
  resetPasswordController,
);

export default router;
