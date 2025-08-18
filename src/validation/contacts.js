// src/validation/contacts.js
import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Name is required.',
    'string.base': 'Name should be a string.',
  }),
  phoneNumber: Joi.string().required().messages({
    'any.required': 'Phone number is required.',
    'string.base': 'Phone number should be a string.',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'Email is required.',
    'string.email': 'Email must be a valid email.',
    'string.base': 'Email should be a string.',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'IsFavourite should be a boolean.',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .required()
    .messages({
      'any.required': 'Contact type is required.',
      'any.only': 'Contact type must be one of: work, home, personal.',
    }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().messages({
    'string.base': 'Name should be a string.',
  }),
  phoneNumber: Joi.string().messages({
    'string.base': 'Phone number should be a string.',
  }),
  email: Joi.string().email().messages({
    'string.email': 'Email must be a valid email.',
    'string.base': 'Email should be a string.',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'IsFavourite should be a boolean.',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'any.only': 'Contact type must be one of: work, home, personal.',
  }),
});
