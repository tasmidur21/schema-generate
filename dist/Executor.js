"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Executor = void 0;
const config_1 = require("./config/config");
const MySQLDatabase_1 = require("./databases/MySQLDatabase");
const PostgresDatabase_1 = require("./databases/PostgresDatabase");
const SqliteDatabase_1 = require("./databases/SqliteDatabase");
const SchemaOperation_1 = require("./schemas-operations/SchemaOperation");
const SchemaOperationForMysql_1 = require("./schemas-operations/SchemaOperationForMysql");
const SchemaOperationForPostgres_1 = require("./schemas-operations/SchemaOperationForPostgres");
const SchemaOperationForSqlite_1 = require("./schemas-operations/SchemaOperationForSqlite");
class Executor {
    constructor(table, databaseType, options) {
        this.table = table;
        this.databaseType = databaseType !== null && databaseType !== void 0 ? databaseType : config_1.config.default;
        this.databaseConfig = config_1.config[this.databaseType];
        this.execute();
    }
    execute() {
        console.log(this.databaseConfig);
        let database;
        let operation;
        if (this.databaseType === 'postgres') {
            database = new PostgresDatabase_1.PostgresDatabase(this.databaseConfig);
            operation = new SchemaOperationForPostgres_1.SchemaOperationForPostgres();
        }
        else if (this.databaseType === 'mysql') {
            database = new MySQLDatabase_1.MySQLDatabase(this.databaseConfig);
            operation = new SchemaOperationForMysql_1.SchemaOperationForMysql();
        }
        else if (this.databaseType === 'mysql') {
            database = new SqliteDatabase_1.SqliteDatabase(this.databaseConfig);
            operation = new SchemaOperationForSqlite_1.SchemaOperationForSqlite();
        }
        else {
            console.error('Invalid database type. Please use "postgres" or "mysql".');
            return;
        }
        console.log(database, operation);
        new SchemaOperation_1.SchemaOperation(database, operation).generate();
    }
}
exports.Executor = Executor;
