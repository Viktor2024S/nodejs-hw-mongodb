export const errorHandler = (err, req, res, next) => {
  if (err.name === 'CastError') {
    return res.status(400).json({
      status: 400,
      message: 'Invalid contact ID',
      data: {
        message: 'The provided ID is not a valid MongoDB ObjectId.',
      },
    });
  }

  if (err.name === 'ValidationError') {
    return res.status(400).json({
      status: 400,
      message: 'Bad Request',
      data: err.message,
    });
  }

  const { status = 500, message = 'Something went wrong' } = err;

  res.status(status).json({
    status,
    message,
    data: err.data,
  });
};
