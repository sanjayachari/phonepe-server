const axios = require("axios");
import { Buffer } from "buffer";
import crypto from "crypto";

export const Test = (req: any, res: any) => {
  const message = "Test route is working!";
  var x = 1;
  debugger;
  var x = x+1;
  debugger;
  console.log(x)
  res.status(200).json({ message });
};

// https://youtu.be/4oDmBjusoKM?si=iZB5QaUH_0lqVeux
export const transaction = async (req: any, res: any) => {
  const payload = {
    merchantId: "PGTESTPAYUAT",
    merchantTransactionId: "MT7850590068188104",
    merchantUserId: "MUID123",
    amount: 10000,
    redirectUrl: "http://localhost:5000/redirect-url",
    redirectMode: "POST",
    callbackUrl: "http://localhost:5000/callback-url",
    mobileNumber: "9999999999",
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  };

  const jsonPayload = JSON.stringify(payload);

  // Encode JSON payload to Base64
  const base64Payload = Buffer.from(jsonPayload).toString("base64");

  // Concatenate components
  const concatenatedString = base64Payload + "/pg/v1/pay" + "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";

  // Create a SHA256 hash object
  const sha256 = crypto.createHash("sha256");

  // Update hash object with concatenated string
  sha256.update(concatenatedString);

  // Calculate the hash
  const hash = sha256.digest("hex");

  console.log("hash", hash); // Output the SHA256 hash
  const hashed = hash + "###" + "1";
  console.log("hashed", hashed);

  try {
    const url = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

    const resp = await axios.post(
      url,
      { request: hash },
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "X-VERIFY": hashed,
        },
      }
    );
    console.log("resp", resp);
  } catch (error: any) {
    console.log(error);
  }
};


