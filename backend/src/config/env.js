
const requiredEnvVariables = ["MONGO_URI"];

function validateEnv() {
    const missingVariables = requiredEnvVariables.filter(
        (variable) => !process.env[variable]
    );

    if (missingVariables.length > 0) {
        throw new Error(
            `Missing required environment variables: ${missingVariables.join(", ")}`
        );
    }
}

module.exports = validateEnv;
