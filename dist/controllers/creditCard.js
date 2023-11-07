"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.creditCardTokenization = void 0;
const card = {
    CustomerName: "Comprador",
    CardNumber: "4532117080573700",
    Holder: "Comprador T Cielo",
    ExpirationDate: "12/2030",
    Brand: "Visa"
};
const creditCardTokenization = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://apisandbox.cieloecommerce.cielo.com.br/1/card/", { method: "POST", body: JSON.stringify(card) });
    const { data, error } = yield response.json();
    console.log(data);
    console.log(error);
    if (response.ok) {
        return data;
    }
    return "error";
});
exports.creditCardTokenization = creditCardTokenization;
