"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merchantId = '12ff917d-61c4-470f-aa23-759c7a13f4f6';
const merchantKey = 'SMWQBSQWTEHSFYEJSBHOFOOPJLRZUHNLGKXHPEXM';
const authorizationMiddleware = (req, res, next) => {
    const authorizationHeader = `Bearer ${merchantId}:${merchantKey}`;
    res.setHeader('Authorization', authorizationHeader);
    next();
};
exports.default = authorizationMiddleware;
