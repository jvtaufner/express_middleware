import { Request, Response } from 'express';
import axios from 'axios';
const merchantId = '12ff917d-61c4-470f-aa23-759c7a13f4f6';
const merchantKey = 'SMWQBSQWTEHSFYEJSBHOFOOPJLRZUHNLGKXHPEXM';
const authorizationHeader = {
    MerchantId:merchantId,
    MerchantKey: merchantKey
};

export const handleFirstPost = async (req: Request, res: Response) => {

    console.log("Oi")
    const creditCardData = {
        CustomerName: "Comprador",
        CardNumber: "1178120473998888",
        Holder: "Comprador T Cielo",
        ExpirationDate: "12/2030",
        Brand: "Visa"
      };
      
    try {

        const firstResponse = await axios.post('https://apisandbox.cieloecommerce.cielo.com.br/1/card/', creditCardData, {headers:authorizationHeader});
        console.log(firstResponse.data);
        const tokenizedData = firstResponse.data;
        const Client = tokenizedData;
        Client.CustomerName = creditCardData.CustomerName;

        //const secondResponse = await axios.post('ixc', { tokenizedData });


        //console.log(secondResponse.data);

        res.send('Data sent to the second endpoint successfully.');
    } catch (error:any) {
        console.error('Error:', error.response.data);
        //console.log(error);
        res.status(500).send('An error occurred while sending data to the second endpoint.');
  }
};
