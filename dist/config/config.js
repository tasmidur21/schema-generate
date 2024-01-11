"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const processEnv = process.env;
console.log(processEnv.DEFAULT_CONNECTION);
exports.config = {
    default: (_a = processEnv.DEFAULT_CONNECTION) !== null && _a !== void 0 ? _a : "postgres",
    postgres: {
        host: processEnv.PG_DB_HOST,
        port: processEnv.PG_DB_PORT,
        user: processEnv.PG_DB_USER,
        password: processEnv.PG_DB_PASSWORD,
        database: processEnv.PG_DB_DATABASE,
    },
    mysql: {
        host: processEnv.MYSQL_DB_HOST,
        port: processEnv.MYSQL_DB_PORT,
        user: processEnv.MYSQL_DB_USER,
        password: processEnv.MYSQL_DB_PASSWORD,
        database: processEnv.MYSQL_DB_DATABASE,
    },
    sqlite: {
        database: processEnv.SQLITE_DB,
    }
};
