"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDialect = void 0;
const mssql_1 = require("./mssql");
const mysql_1 = require("./mysql");
const postgres_1 = require("./postgres");
const sqlite_1 = require("./sqlite");
const dialects = {
    db2: null,
    oracle: null,
    snowflake: null,
    mssql: mssql_1.mssqlOptions,
    mysql: mysql_1.mysqlOptions,
    mariadb: mysql_1.mysqlOptions,
    postgres: postgres_1.postgresOptions,
    sqlite: sqlite_1.sqliteOptions
};
function getDialect(dialectName) {
    const result = dialects[dialectName];
    if (!result) {
        throw new Error(`Dialect not available for ${dialectName}`);
    }
    return result;
}
exports.getDialect = getDialect;
//# sourceMappingURL=dialects.js.map