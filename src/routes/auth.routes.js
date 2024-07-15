import { Router } from "express";
import { TestApi } from "../controllers/auth.controller.js";

const router = Router();
/**
 * @swagger
 * auth/test:
 *   get:
 *     summary: Test endpoint
 *     description: Returns a simple "API IS WORKING" message
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: API IS WORKING
 */
router.route("/test").get(TestApi);

export default router;
