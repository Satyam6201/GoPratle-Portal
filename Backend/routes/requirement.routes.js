import express from 'express';
import { createRequirement } from '../controllers/requirement.controller.js';

const router = express.Router();

router.post("/", createRequirement);

export default router;