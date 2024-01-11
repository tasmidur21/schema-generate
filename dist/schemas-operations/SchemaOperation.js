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
exports.SchemaOperation = void 0;
class SchemaOperation {
    constructor(database, schemaOperation) {
        this.database = database;
        this.schemaOperation = schemaOperation;
    }
    generate() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.database.connect();
                const tableSchema = yield this.schemaOperation.getTableSchema(this.database);
                console.log(tableSchema);
                const rules = this.schemaOperation.generateColumnRules(tableSchema);
                console.log(rules);
            }
            catch (error) {
                console.error('Validation error:', error.message);
            }
            finally {
                // Close the database connection
                this.database.end();
            }
        });
    }
}
exports.SchemaOperation = SchemaOperation;
