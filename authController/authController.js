const axios = require("axios");
// import { Buffer } from "buffer";
// import crypto from "crypto";

const homePage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home | WonderWithSan</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <style>
.hero-bg {
    background-color: #000; /* Dark background for visibility */
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.hero-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff; /* White text for contrast */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Optional: Adds shadow for depth */
}
</style>

</head>
<body>

<div class="container-fluid hero-bg">
    <div class="row">
        <div class="col-md-12 hero-text">
            <h1>Welcome to WonderWithSan</h1>
            <p>Your one-stop destination for innovative solutions.</p>
            <p> Explore Our Services</p>
        </div>
    </div>
</div>
  

<section id="about-us">
    <div class="">
        <div class="row">
            <div class="col-md-12">
                <h2>About Us</h2>
                <p>Learn more about WonderWithSan and our mission to provide innovative solutions to our clients.</p>
                <a href="/about" class="btn btn-secondary">Read More About Us</a>
            </div>
        </div>
    </div>
</section>

<footer>
    <div class="">
        <div class="row">
            <div class="col-md-12">
                <p>&copy; 2023 WonderWithSan. All rights reserved.</p>
            </div>
        </div>
    </div>
</footer>

</body>
</html>
`
const Test = (req, res) => {
  const message = "Production server!";
  res.send(homePage);
};


const termsAndConditionsHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PhonePe Integration - Terms and Conditions</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
            background-color: #f5f5f5;
        }
        h1 {
            color: #333;
        }
        p {
            text-align: justify;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <h1>Terms and Conditions for Integration with Wonderwithsan</h1>
    <p>Last Updated: [Date]</p>

    <h2>Introduction</h2>
    <p>These Terms and Conditions ("T&C") govern the use of the telecommunication and other contracting services API and/or SDK by users who wish to integrate wonderwithsan with PhonePe. By accessing or using the IT service API and/or SDK, you agree to be bound by these T&C.</p>

    <!-- Add more sections as needed -->

    <footer>
        <p>Contact Information:</p>
        <p>Founder : Sanjay achari<br>
        Email: benagaluru, bannerghatta, karnataka, 560076 <br>
        Website: https://sanjay-portfolio-ten.vercel.app/</p>
    </footer>
</body>
</html>

`;

const Terms = (req, res) => {
  res.send(termsAndConditionsHTML);
};

const policy = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Refund Policy - WonderWithSan</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
            background-color: #f5f5f5;
        }
        h1 {
            color: #333;
        }
        h2 {
            color: #666;
        }
        p {
            text-align: justify;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <h1>Refund Policy for WonderWithSan</h1>

    <h2>Eligibility</h2>
    <p>Products/services purchased from WonderWithSan are eligible for a refund under the following conditions:</p>

    <ul>
        <li>The product/service has not been used or damaged.</li>
        <li>The request for refund is made within 30 days from the purchase date.</li>
        <li>The product/service is returned in its original packaging and condition.</li>
    </ul>

    <h2>How to Request a Refund</h2>
    <p>To request a refund, please contact our customer service team at codesanjay93@gmail.com or visit our website at https://sanjay-portfolio-ten.vercel.app/. Include your order number and a brief explanation of why you are requesting a refund.</p>

    <h2>Processing Time</h2>
    <p>Once your refund request is approved, the refund will be processed within 7 business days. You will receive an email confirmation once the refund has been completed.</p>

    <h2>Limits and Exceptions</h2>
    <p>Please note that certain products/services may not be eligible for refunds after 30 days from the purchase date. Additionally, shipping fees are non-refundable unless the return is due to an error on our part.</p>

    <h2>Final Notes</h2>
    <p>WonderWithSan reserves the right to deny refunds for purchases that do not meet our refund policy criteria. All decisions regarding refunds are final.</p>

    <footer>
        <p>Last Updated: 1/08/2024 </p>
        <p>Contact Information:</p>
        <p>WonderWithSan<br>
        Email: codesanjay93@gmail.com<br>
        Website: https://sanjay-portfolio-ten.vercel.app/</p>
    </footer>
</body>
</html>

`

const Policies = (req, res) => {
  res.send(policy);
};

const retun_policy = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Return Policy - WonderWithSan</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
            background-color: #f5f5f5;
        }
        h1 {
            color: #333;
        }
        h2 {
            color: #666;
        }
        p {
            text-align: justify;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <h1>Return Policy for WonderWithSan</h1>

    <h2>Eligibility</h2>
    <p>Items purchased from WonderWithSan are eligible for return under the following conditions:</p>

    <ul>
        <li>The item is unused and undamaged.</li>
        <li>The request for return is made within 14 days from the delivery date.</li>
        <li>The item is returned in its original packaging and condition.</li>
    </ul>

    <h2>How to Initiate a Return</h2>
    <p>To initiate a return, please contact our customer service team at codesanjay93@gmail.com or visit our website at https://sanjay-portfolio-ten.vercel.app/. Include your order number and a brief explanation of why you are returning the item.</p>

    <h2>Processing Time</h2>
    <p>Once your return request is approved, the item will be picked up or shipped back to us within 7 days. You will receive an email confirmation once the return has been processed.</p>

    <h2>Limits and Exceptions</h2>
    <p>Please note that certain items may not be eligible for returns after 14 days from the delivery date. Additionally, shipping fees are non-refundable unless the return is due to an error on our part.</p>

    <h2>Final Notes</h2>
    <p>WonderWithSan reserves the right to deny returns for purchases that do not meet our return policy criteria. All decisions regarding returns are final.</p>

    <footer>
        <p>Last Updated: 1/08/2024 </p>
        <p>Contact Information:</p>
        <p>WonderWithSan<br>
        Email: codesanjay93@gmail.com<br>
        Website: https://sanjay-portfolio-ten.vercel.app/</p>
    </footer>
</body>
</html>
`
const ReturnPolicy = (req, res) => {
  res.send(retun_policy);
};

const shippingPolicyContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shipping Policy - WonderWithSan</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
            background-color: #f5f5f5;
        }
        h1 {
            color: #333;
        }
        h2 {
            color: #666;
        }
        p {
            text-align: justify;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <h1>Shipping Policy for WonderWithSan</h1>

    <h2>Shipping Options</h2>
    <p>We offer several shipping options to ensure your order reaches you safely and quickly:</p>

    <ul>
        <li><strong>Standard Shipping:</strong> Delivery within 5-7 business days.</li>
        <li><strong>Expedited Shipping:</strong> Delivery within 2-3 business days.</li>
        <li><strong>International Shipping:</strong> Delivery times vary depending on destination.</li>
    </ul>

    <h2>Shipping Costs</h2>
    <p>Shipping costs are calculated based on the weight of the package, the distance it travels, and the shipping method chosen. You will be able to see the total cost of shipping at checkout before placing your order.</p>

    <h2>Delivery Times</h2>
    <p>Most orders are processed and shipped within 1-2 business days of receiving your payment. Delivery times may vary depending on the shipping option selected and the destination.</p>

    <h2>Tracking Your Order</h2>
    <p>Once your order has been shipped, you will receive a tracking number and link to track your package online. Please allow 24-48 hours for the tracking information to update.</p>

    <h2>Delays and Issues</h2>
    <p>In case of delays or issues with your shipment, please contact our customer service team at codesanjay93@gmail.com or visit our website at https://sanjay-portfolio-ten.vercel.app/ for assistance.</p>

    <footer>
        <p>Last Updated: 1/08/2024 </p>
        <p>Contact Information:</p>
        <p>WonderWithSan<br>
        Email: codesanjay93@gmail.com<br>
        Website: https://sanjay-portfolio-ten.vercel.app/</p>
    </footer>
</body>
</html>

`

const shippingPolicy = (req, res) => {
  res.send(shippingPolicyContent);
};

const transaction = async (req, res) => {
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
  } catch (error) {
    console.log(error);
  }
};


module.exports = { Test, transaction,Terms ,Policies,ReturnPolicy , shippingPolicy};
