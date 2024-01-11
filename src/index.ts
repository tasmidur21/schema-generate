#!/usr/bin/env ts-node

import { program } from 'commander';
import { Executor } from './Executor';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

program
  .version('1.0.0')
  .description('A simple CLI created with Commander in TypeScript');

program
  .command('schema')
  .option('-db, --database <database>', 'Specify the database type as like mysql,postgres,sqlite')
  .requiredOption('-t, --table <table>', 'Specify the table name')
  .description('Dynamic schema generate')
  .action((cmd) => {
     new Executor(cmd.table);
  });
program.parse(process.argv);
