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
 *       404:
 *         $ref: '#/components/responses/404'
 */

router.post(
  "/",
  projectsValidations.createUpdate,
  projectsController.createUpdate
);

module.exports = router;
