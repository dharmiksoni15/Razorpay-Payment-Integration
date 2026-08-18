// STEP 1: Import packages
const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const path = require("path");

// STEP 2: Load environment variables
require("dotenv").config();

// STEP 3: Create Express app
const app = express();

// STEP 4: Create Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.razorpay_key_id,
  key_secret: process.env.razorpay_key_secret,
});

// STEP 5: Set EJS as view engine
app.set("view engine", "ejs");

// STEP 6: Add middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// STEP 7: Show payment page
app.get("/", (req, res) => {
  res.render("index", {
    key: process.env.razorpay_key_id,
  });
});

// STEP 8: Create Razorpay order
app.post("/create-order", async (req, res) => {
  try {
    // Get amount from frontend
    const { amount } = req.body;

    // Validate amount
    if (!amount || amount <= 0) {
      return res.status(400).json({
        error: "Please enter a valid amount",
      });
    }

    // Create order options
    const options = {
      amount: Number(amount) * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    // Create order on Razorpay
    const order = await razorpay.orders.create(options);

    // Send order to frontend
    res.status(200).json(order);
  } catch (error) {
    console.error("Order creation error:", error);

    res.status(500).json({
      error: error.message,
    });
  }
});

// STEP 9: Verify payment
app.post("/verify-payment", (req, res) => {
  try {
    // Get payment details
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    // Create signature body
    const body =
      razorpay_order_id + "|" + razorpay_payment_id;

    // Generate signature
    const expectedSignature = crypto
      .createHmac(
        "sha256",
        process.env.razorpay_key_secret
      )
      .update(body)
      .digest("hex");

    // Check signature
    if (expectedSignature === razorpay_signature) {
      console.log("Payment verification successful");

      return res.status(200).json({
        status: "ok",
      });
    }

    // Payment verification failed
    return res.status(400).json({
      status: "failed",
    });
  } catch (error) {
    console.error("Payment verification error:", error);

    res.status(500).json({
      error: error.message,
    });
  }
});

// STEP 10: Show success page
app.get("/payment-success", (req, res) => {
  res.sendFile(
    path.join(__dirname, "views", "success.html")
  );
});

// STEP 11: Start server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});