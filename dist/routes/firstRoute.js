"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const firstController_1 = require("../controllers/firstController");
const firstRouter = (0, express_1.default)();
firstRouter.post('/route1', firstController_1.handleFirstPost);
exports.default = firstRouter;
