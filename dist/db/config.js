"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const creditCard_1 = require("../models/creditCard");
//import { Customers } from "../models/customer";
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "123",
    database: "creditCard", customer,
    logging: false,
    models: [creditCard_1.CreditCard]
});
exports.default = connection;
