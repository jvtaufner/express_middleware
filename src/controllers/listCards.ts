import { Request, Response } from 'express';

export const handleSecondPost = (req: Request, res: Response) => {
  res.send("ok");
};
