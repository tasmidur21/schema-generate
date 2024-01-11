#!/usr/bin/env ts-node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const Executor_1 = require("./Executor");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
commander_1.program
    .version('1.0.0')
    .description('A simple CLI created with Commander in TypeScript');
commander_1.program
    .command('schema')
    .option('-db, --database <database>', 'Specify the database type as like mysql,postgres,sqlite')
    .requiredOption('-t, --table <table>', 'Specify the table name')
    .description('Dynamic schema generate')
    .action((cmd) => {
    new Executor_1.Executor(cmd.table);
});
commander_1.program.parse(process.argv);
