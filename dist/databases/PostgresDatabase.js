"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresDatabase = void 0;
const pg_1 = require("pg");
class PostgresDatabase {
    constructor(config) {
        this.client = new pg_1.Client(config);
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.client.connect();
                console.log('Connected to PostgreSQL database');
            }
            catch (error) {
                console.error('Error connecting to PostgreSQL database:', error.message);
                throw error;
            }
        });
    }
    query(sql) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.client.query(sql);
            }
            catch (error) {
                console.error('Error executing query:', error.message);
                throw error;
            }
        });
    }
    end() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.client.end();
                console.log('Disconnected from PostgreSQL database');
            }
            catch (error) {
                console.error('Error disconnecting from PostgreSQL database:', error.message);
                throw error;
            }
        });
    }
}
exports.PostgresDatabase = PostgresDatabase;
