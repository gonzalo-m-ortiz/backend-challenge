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

const usersIds = body("id").custom((value) => {
  if (typeof value === "number" || (Array.isArray(value) && value.length)) {
    if (Array.isArray(value)) {
      value.forEach((id) => {
        if (typeof id !== "number") {
          throw new Error("must be an integer or an integer array");
        }
      });
    }
    return true;
  }
  throw new Error("must be an integer or an integer array");
});

const createUpdate = [
  id,
  name,
  description,
  managerId,
  statusId,
  executeValidation,
];

const modifyProjectUsers = [usersIds, executeValidation];

module.exports = {
  createUpdate,
  modifyProjectUsers,
};
