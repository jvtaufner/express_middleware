"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const secondController_1 = require("../controllers/secondController");
const router = express_1.default.Router();
router.post('/route2', secondController_1.handleSecondPost);
exports.default = router;
