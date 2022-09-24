module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Welcome@123",
  DB: "testdb",
  dialect: "mysql", //postgres or mssql or oracle
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
