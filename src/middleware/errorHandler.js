export const errorHandler = (err, req, res, next) => {
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

// import { HttpError } from 'http-errors';

// export const errorHandler = (err, req, res, next) => {
//   if (err instanceof HttpError) {
//     res.status(err.status).json({
//       status: err.status,
//       message: err.message,
//       data: err,
//     });
//     return;
//   }

//   res.status(500).json({
//     status: 500,
//     message: 'Something went wrong',
//     data: err.message,
//   });
// };
