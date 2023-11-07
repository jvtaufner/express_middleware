"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCard = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
class CreditCard extends sequelize_typescript_1.Model {
}
exports.CreditCard = CreditCard;
CreditCard.init({
    customerName: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull = false
    },
    cardNumber: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull = false
    },
    holder: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull = false
    },
    expirationDate: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull = false
    },
    brand: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull = false
    },
}, {
    sequelize,
    modelName: 'CreditCard'
});
