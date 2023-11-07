import express from 'express';
import { Request, Response } from 'express';
import { handleFirstPost } from '../controllers/firstController';

const firstRouter = express()

firstRouter.post('/route1', handleFirstPost);

export default firstRouter;





