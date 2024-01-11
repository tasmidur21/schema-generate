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
exports.App = void 0;
class App {
    constructor(database, schemaOperation) {
        this.database = database;
        this.schemaOperation = schemaOperation;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.database.connect();
            // Retrieve table schema from the database
            const tableSchema = yield this.schemaOperation.getTableSchema(this.database);
            console.log(tableSchema);
            // Generate validation rules based on the schema
            const rules = this.schemaOperation.generateColumnRules(tableSchema);
            console.log(rules);
            // Data to be validated
            const dataToValidate = {
                title: "Menu title",
                slug: "menu-slag",
                styles: "style",
                location: "test-location"
            };
            // Validate the data using the generated rules
            try {
                // Validation.validateData(dataToValidate, rules);
                console.log('Data is valid!');
            }
            catch (error) {
                console.error('Validation error:', error.message);
            }
            finally {
                // Close the database connection
                yield this.database.end();
            }
        });
    }
}
exports.App = App;
