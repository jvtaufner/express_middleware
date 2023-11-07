import express from 'express';
import { Request, Response } from 'express';
import { handleSecondPost } from '../controllers/secondController';

const router = express.Router();

router.post('/route2', handleSecondPost);

export default router; 
