import { Request, Response, NextFunction } from 'express';

const merchantId = '12ff917d-61c4-470f-aa23-759c7a13f4f6';
const merchantKey = 'SMWQBSQWTEHSFYEJSBHOFOOPJLRZUHNLGKXHPEXM'; 

const authorizationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authorizationHeader = `Bearer ${merchantId}:${merchantKey}`;
  res.setHeader('Authorization', authorizationHeader);
  next();
};

export default authorizationMiddleware;
