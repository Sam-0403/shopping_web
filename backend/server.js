require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

connectDB();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT,
    () => console.log(`Server Running on Port ${PORT}`)
);

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);

function shutDown() {
    console.log('Received kill signal, shutting down gracefully');
    server.close(() => {
        console.log('Closed out remaining connections');
        process.exit(0);
    });

    setTimeout(() => {
        console.error('Could not close connections in time, forcefully shutting down');
        process.exit(1);
    }, 10000);
}