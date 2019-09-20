import { ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions = {
    type: "postgres",
    host: process.env.DB_ENDPOINT,
    // postgres의 default port
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "ember",
    synchronize: true,
    logging: true,
    entities: ["entities/**/*.*"]
};

export default connectionOptions;
