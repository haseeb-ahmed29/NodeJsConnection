# Node.js MongoDB Connection (`nodejsconnection`)

A simple, robust Node.js application demonstrating asynchronous connection to a MongoDB database using `mongoose` and environment variable management with `dotenv`.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Usage](#usage)
- [Code Overview](#code-overview)
- [Complete Code (`Connection.js`)](#complete-code-connectionjs)
- [License](#license)

---

## ℹ️ Overview

This project provides a clean setup for connecting a Node.js application to a MongoDB database. It includes:
- Environment variable validation (`MONGO_URL`).
- Early application termination if critical configuration is missing (`process.exit(1)`).
- Asynchronous connection handling using `async/await` and `try/catch` error management.

---

## ⚡ Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **MongoDB** instance (Local MongoDB server or a MongoDB Atlas connection string)

---

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/haseeb-ahmed29/NodeJsConnection.git
   cd NodeJsConnection
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

   This project uses the following packages:
   - [`mongoose`](https://www.npmjs.com/package/mongoose) - MongoDB object modeling tool.
   - [`dotenv`](https://www.npmjs.com/package/dotenv) - Zero-dependency module to load environment variables from a `.env` file.

---

## 🔑 Environment Setup

Create a `.env` file in the root directory of your project (or copy `.env.example`):

```bash
cp .env.example .env
```

Add your MongoDB connection string to the `.env` file:

```env
MONGO_URL=mongodb://127.0.0.1:27017/myDatabase
```

> **Note:** If `MONGO_URL` is not defined in `.env`, the script will print an error message and terminate the process.

---

## 🚀 Usage

To start the script and verify database connectivity, execute:

```bash
node Connection.js
```

### Expected Outputs

- **Success:**
  ```text
  Connected to MongoDb Successfully!
  ```

- **Missing Environment Variable (`MONGO_URL`):**
  ```text
  Mongo_URL is not defined in .env
  ```

- **Connection Failure (e.g. invalid URI or database down):**
  ```text
  Connection Failed
  <Error details>
  ```

---

## 🔍 Code Overview

The script `Connection.js` operates as follows:

1. **Loads Environment Variables:** Uses `require("dotenv").config()` to read parameters from `.env`.
2. **Validates Configuration:** Checks if `process.env.MONGO_URL` is set. If missing, logs a message and stops execution immediately using `process.exit(1)`.
3. **Connects to MongoDB:** Calls `mongoose.connect(ConnectionString)` within an `async function`.
4. **Error Handling:** Catches any connection errors and outputs standard error messages without crashing unhandled.

---

## 📄 Complete Code (`Connection.js`)

Below is the full source code defined in `Connection.js`:

```javascript
require("dotenv").config();
const mongoose = require("mongoose");

const ConnectionString = process.env.MONGO_URL;

if (!ConnectionString) {
    console.log("Mongo_URL is not defined in .env");

    // Program yahi par stop kardo
    process.exit(1);
}

async function connectToDatabase() {
    try {
        await mongoose.connect(ConnectionString);

        console.log("Connected to MongoDb Successfully!");
    } catch (error) {
        console.log("Connection Failed");

        console.log(error.message);
    }
}

connectToDatabase();
```

---

## 📜 License

This project is licensed under the [ISC License](package.json).
