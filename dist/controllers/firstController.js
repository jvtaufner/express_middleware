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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleFirstPost = void 0;
const axios_1 = __importDefault(require("axios"));
const merchantId = '12ff917d-61c4-470f-aa23-759c7a13f4f6';
const merchantKey = 'SMWQBSQWTEHSFYEJSBHOFOOPJLRZUHNLGKXHPEXM';
const authorizationHeader = {
    MerchantId: merchantId,
    MerchantKey: merchantKey
};
const handleFirstPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Oi");
    const creditCardData = {
        CustomerName: "Comprador",
        CardNumber: "1178120473998888",
        Holder: "Comprador T Cielo",
        ExpirationDate: "12/2030",
        Brand: "Visa"
    };
    try {
        const firstResponse = yield axios_1.default.post('https://apisandbox.cieloecommerce.cielo.com.br/1/card/', creditCardData, { headers: authorizationHeader });
        console.log(firstResponse.data);
        const tokenizedData = firstResponse;
        //const secondResponse = await axios.post('ixc', { tokenizedData });
        //console.log(secondResponse.data);
        res.send('Data sent to the second endpoint successfully.');
    }
    catch (error) {
        console.error('Error:', error.response.data);
        //console.log(error);
        res.status(500).send('An error occurred while sending data to the second endpoint.');
    }
});
exports.handleFirstPost = handleFirstPost;
