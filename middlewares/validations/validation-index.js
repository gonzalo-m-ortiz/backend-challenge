const { validationResult } = require("express-validator");

const executeValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error();
    error.validationError = errors.array();
    error.status = 400;
    return next(error);
  }
  next();
};

module.exports = { executeValidation };
