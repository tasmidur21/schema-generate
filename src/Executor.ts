import { log } from "console";
import { config } from "./config/config";
import { Database } from "./contacts/Database";
import { MySQLDatabase } from "./databases/MySQLDatabase";
import { PostgresDatabase } from "./databases/PostgresDatabase";
import { SqliteDatabase } from "./databases/SqliteDatabase";
import { SchemaOperation } from "./schemas-operations/SchemaOperation";
import { SchemaOperationForMysql } from "./schemas-operations/SchemaOperationForMysql";
import { SchemaOperationForPostgres } from "./schemas-operations/SchemaOperationForPostgres";
import { SchemaOperationForSqlite } from "./schemas-operations/SchemaOperationForSqlite";


export class Executor {
  private table: string;
  private database: any;
  private databaseType: string;
  private schemaOperation: any;
  private options?: any;
  private databaseConfig: any;

  constructor(table: string, databaseType?: string, options?: any) {
    this.table = table;
    this.databaseType = databaseType ?? config.default;
    this.databaseConfig = config[this.databaseType];
    this.execute();
  }
  private execute(): void {
    console.log(this.databaseConfig);
    
    let database: Database;
    let operation: any;
    if (this.databaseType === 'postgres') {
      database = new PostgresDatabase(this.databaseConfig);
      operation=new SchemaOperationForPostgres();
    } else if (this.databaseType === 'mysql') {
      database = new MySQLDatabase(this.databaseConfig);
      operation=new SchemaOperationForMysql();
    } else if (this.databaseType === 'mysql') {
      database = new SqliteDatabase(this.databaseConfig);
      operation=new SchemaOperationForSqlite();
    }
    else {
      console.error('Invalid database type. Please use "postgres" or "mysql".');
      return;
    }
    console.log(database,operation);
    
    new SchemaOperation(database,operation).generate();
  }
}

