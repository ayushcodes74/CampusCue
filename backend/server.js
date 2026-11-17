const dns = require("node:dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);
require("dotenv").config();
const validateEnv = require("./src/config/env");
const app = require("./src/app");
const connectDB = require("./src/db/db");

async function startServer() {
    try {
        validateEnv();
        await connectDB();
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    }
    catch (error) {
        console.error("Failed to start server:", error.message);
        process.exit(1);
    }

}
startServer();