# Razorpay Payment Integration

A Razorpay Payment Gateway integration built using **Node.js, Express.js, EJS, and Razorpay**.

This project demonstrates the complete payment flow from creating a Razorpay order to verifying the payment signature securely on the server.

## 🚀 Features

* Create Razorpay orders
* Razorpay Checkout integration
* Accept payment amount from the user
* Secure payment signature verification
* Payment success page
* Razorpay Test Mode support
* Environment variables for API credentials

## 🛠️ Tech Stack

* Node.js
* Express.js
* Razorpay
* EJS
* HTML
* JavaScript
* dotenv

## 📁 Project Structure

```text
Razorpay-Payment-Integration/
│
├── public/
│
├── views/
│   ├── index.ejs
│   └── success.html
│
├── .env
├── .gitignore
├── app.js
├── package.json
└── package-lock.json
```

## 🔄 Payment Flow

```text
User enters amount
        ↓
Click Pay Now
        ↓
Create Razorpay Order
        ↓
Razorpay Checkout Opens
        ↓
User completes payment
        ↓
Receive Payment ID & Signature
        ↓
Verify Payment Signature
        ↓
Payment Successful
        ↓
Success Page
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/dharmiksoni15/Razorpay-Payment-Integration.git
```

### 2. Go to the project folder

```bash
cd Razorpay-Payment-Integration
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create `.env` file

Create a `.env` file in the root directory:

```env
PORT=3000
razorpay_key_id=your_razorpay_key_id
razorpay_key_secret=your_razorpay_key_secret
```

Replace the values with your Razorpay **Test Mode** API credentials.

### 5. Start the server

```bash
node app.js
```

The application will run on:

```text
http://localhost:3000
```

## 🔐 Environment Variables

The following variables are required:

| Variable              | Description         |
| --------------------- | ------------------- |
| `PORT`                | Server port         |
| `razorpay_key_id`     | Razorpay API Key ID |
| `razorpay_key_secret` | Razorpay API Secret |

> Never upload your `.env` file or Razorpay secret key to GitHub.

## 🧪 Testing

This project uses **Razorpay Test Mode**.

Use Razorpay's official test payment credentials when testing payments.

No real money is charged while using Test Mode.

## 📌 Important

The `.gitignore` file excludes:

```text
node_modules/
.env
```

This prevents dependencies and secret credentials from being uploaded to GitHub.

## 👨‍💻 Author

**Dharmik Soni**

MCA Student | Full-Stack MERN Developer

GitHub:
https://github.com/dharmiksoni15

---

⭐ If you found this project useful, feel free to star the repository.
