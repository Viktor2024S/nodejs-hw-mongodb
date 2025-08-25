import createHttpError from 'http-errors';

export const validateBody = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    const validationErrors = error.details.map((detail) => detail.message);

    return next(
      createHttpError(400, validationErrors.join(', '), {
        errors: validationErrors,
      }),
    );
  }

  next();
};
