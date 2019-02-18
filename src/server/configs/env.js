export default {
    APP_PORT: process.env.APP_PORT || 12345,
    MONGO_URI:
        process.env.MONGO_URI ||
        // "mongodb://dev:dev@mongo:27017/bebook?authSource=admin",
        "mongodb://admin:bebookbebook@bebook-shard-00-00-o0ct8.mongodb.net:27017,bebook-shard-00-01-o0ct8.mongodb.net:27017,bebook-shard-00-02-o0ct8.mongodb.net:27017/bebook?ssl=true&replicaSet=bebook-shard-0&authSource=admin&retryWrites=true",
    JWT_SECRET: process.env.JWT_SECRET || "secret",
};
