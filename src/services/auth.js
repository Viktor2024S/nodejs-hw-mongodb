import bcrypt from 'bcrypt';
import createHttpError from 'http-errors';
import { User } from '../db/models/user.js';

export const registerUser = async (payload) => {
  const userExists = await User.findOne({ email: payload.email });
  if (userExists) {
    throw createHttpError(409, 'Email in use');
  }

  const hashedPassword = await bcrypt.hash(payload.password, 10);

  return await User.create({
    ...payload,
    password: hashedPassword,
  });
};
