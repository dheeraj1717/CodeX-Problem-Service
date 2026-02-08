process.loadEnvFile();

module.exports = {
    PORT: process.env.PORT || 3000,
    ATLAS_URI: process.env.ATLAS_URI,
    NODE_ENV: process.env.NODE_ENV || "development",
}