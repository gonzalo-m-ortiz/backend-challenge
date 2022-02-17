const express = require("express");

const router = express.Router();

const projectsController = require("../controllers/projects");
const projectsValidations = require("../middlewares/validations/projects");

/**
 * @swagger
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Landing Page
 *         description:
 *           type: string
 *           nullable: true
 *           example: Landing Page for ONG
 *         createdAt:
 *           type: string
 *           example: 2022-02-07T11:05:33.000Z
 *         updatedAt:
 *           type: string
 *           example: 2022-02-07T11:05:33.000Z
 *         manager:
 *           type: object
 *           description: User entity
 *           properties:
 *             id:
 *               type: integer
 *               example: 1
 *             name:
 *               type: string
 *               example: Agustin Perez
 *         status:
 *           type: object
 *           description: Project status entity
 *           properties:
 *             id:
 *               type: integer
 *               example: 1
 *             name:
 *               type: string
 *               example: Enabled
 *         users:
 *           type: array
 *           description: Users assigned to the project
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 2
 *               name:
 *                 type: string
 *                 example: Fabricio Perez
 *
 *     ValidationError:
 *       type: object
 *       properties:
 *         errors:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               value:
 *                 description: value provided
 *                 example: 4
 *               msg:
 *                 type: string
 *                 example: must be a string
 *               param:
 *                 type: string
 *                 example: name
 *               location:
 *                 type: string
 *                 example: body
 *     BadRequest:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           example: Related entity with id 500 not found. Not updated
 *   responses:
 *     404:
 *       description: Resource Not Found
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               error:
 *                 type: string
 *                 example: Project with id 1 not found
 *     ValidationError:
 *       description: Validation Error
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ValidationError'
 *     BadRequest:
 *       description: Validation Error
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BadRequest'
 *
 */

/**
 * @swagger
 * /projects/{id}:
 *   get:
 *     tags:
 *       - projects
 *     summary: Retrieve a project.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Project id.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Project detail.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/Project'
 *       404:
 *         $ref: '#/components/responses/404'
 */

router.get("/:id", projectsController.getById);

/**
 * @swagger
 * /projects/{id}:
 *   delete:
 *     tags:
 *       - projects
 *     summary: Delete a project.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Project id.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: Project removed succesfully
 *       404:
 *         $ref: '#/components/responses/404'
 */

router.delete("/:id", projectsController.remove);

/**
 * @swagger
 * /projects:
 *   post:
 *     tags:
 *       - projects
 *     summary: Create or Update a project.
 *     requestBody:
 *       content:
 *         'application/json':
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: Project id, if it's an update
 *                 required: false
 *                 example: 1
 *               name:
 *                 type: string
 *                 required: true
 *                 example: Landing Page
 *               description:
 *                 type: string
 *                 required: false
 *                 example: Landing Page for ONG
 *               managerId:
 *                 type: integer
 *                 required: true
 *                 example: 1
 *               statusId:
 *                 type: integer
 *                 required: true
 *                 example: 1
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: Project created/updated succesfully
 *                 data:
 *                   $ref: '#/components/schemas/Project'
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       404:
 *         $ref: '#/components/responses/404'
 */

router.post(
  "/",
  projectsValidations.createUpdate,
  projectsController.createUpdate
);

/**
 * @swagger
 * /projects:
 *   get:
 *     tags:
 *       - projects
 *     summary: Get paginated list of projects.
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: To filter the list by project name
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Number of the page
 *     responses:
 *       200:
 *         description: Paginated projects list.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       name:
 *                         type: string
 *                         nullable: true
 *                         example: Landing Page
 *                       createdAt:
 *                         type: string
 *                         example: 2022-02-07T11:05:33.000Z
 *                       manager:
 *                         type: object
 *                         description: User entity
 *                         properties:
 *                           id:
 *                             type: integer
 *                             example: 1
 *                           name:
 *                             type: string
 *                             example: Agustin Perez
 *       400:
 *         description: Validation Error or Bad Request (Multiple schemas)
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                 - $ref: '#/components/schemas/ValidationError'
 *                 - $ref: '#/components/schemas/BadRequest'
 */

router.get("/", projectsController.getAllPaginated);

/**
 * @swagger
 * /projects/{projectId}/users:
 *   patch:
 *     tags:
 *       - projects
 *     summary: Assign user/s to a project
 *     parameters:
 *       - in: path
 *         name: projectId
 *         required: true
 *         description: Project id
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         'application/json':
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 oneOf:
 *                   - type: array
 *                     description: users id list
 *                     required: true
 *                     items:
 *                       type: integer
 *                       example: 1
 *                   - type: integer
 *                     description: user id
 *                     required: true
 *                     example: 1
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: Users assigned to the project
 *       400:
 *         description: Validation Error or Bad Request (Multiple schemas)
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                 - $ref: '#/components/schemas/ValidationError'
 *                 - $ref: '#/components/schemas/BadRequest'
 *       404:
 *         $ref: '#/components/responses/404'
 */

router.patch(
  "/:projectId/users",
  projectsValidations.modifyProjectUsers,
  projectsController.modifyProjectUsers
);

/**
 * @swagger
 * /projects/{projectId}/users:
 *   delete:
 *     tags:
 *       - projects
 *     summary: Unassign user/s from a project
 *     parameters:
 *       - in: path
 *         name: projectId
 *         required: true
 *         description: Project id
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         'application/json':
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 oneOf:
 *                   - type: array
 *                     description: users id list
 *                     required: true
 *                     items:
 *                       type: integer
 *                       example: 1
 *                   - type: integer
 *                     description: user id
 *                     required: true
 *                     example: 1
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: Users unassigned from the project
 *       400:
 *         description: Validation Error or Bad Request (Multiple schemas)
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                 - $ref: '#/components/schemas/ValidationError'
 *                 - $ref: '#/components/schemas/BadRequest'
 *       404:
 *         $ref: '#/components/responses/404'
 */

router.delete(
  "/:projectId/users",
  projectsValidations.modifyProjectUsers,
  projectsController.modifyProjectUsers
);

module.exports = router;
