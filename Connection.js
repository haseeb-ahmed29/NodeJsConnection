require("dotenv").config();
 const mongoose = require ("mongoose")

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