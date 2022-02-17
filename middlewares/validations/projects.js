const { body } = require("express-validator");
const { executeValidation } = require("./validation-index");

const id = body("id")
  .optional({ checkFalsy: true })
  .isInt()
  .withMessage("must be an integer")
  .bail();

const name = body("name")
  .exists()
  .withMessage("param required")
  .bail()
  .isString()
  .withMessage("must be a string")
  .bail()
  .notEmpty()
  .withMessage("cannot be empty")
  .bail();

const description = body("description")
  .optional({ checkFalsy: true })
  .isString()
  .withMessage("must be a string")
  .bail();

const managerId = body("managerId")
  .exists()
  .withMessage("param required")
  .bail()
  .isInt()
  .withMessage("must be an integer")
  .bail();

const statusId = body("statusId")
  .exists()
  .withMessage("param required")
  .bail()
  .isInt()
  .withMessage("must be an integer")
  .bail();

const createUpdate = [
  id,
  name,
  description,
  managerId,
  statusId,
  executeValidation,
];

module.exports = {
  createUpdate,
};
