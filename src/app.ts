import express from 'express';
import { Request, Response } from 'express';
import firstRouter from './routes/firstRoute';


const app = express();
const port = 4000;

app.use(express.json());

app.use(firstRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
