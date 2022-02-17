const express = require("express");

const router = express.Router();

const projectsController = require("../controllers/projects");

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
 */

router.get("/:id", projectsController.getById);

module.exports = router;
