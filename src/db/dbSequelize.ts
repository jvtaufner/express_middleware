// db.js

const { Sequelize } = require("sequelize");

// Replace these values with your actual database connection information
const databaseConfig = {
  database: "your_database_name",
  username: "your_username",
  password: "your_password",
  host: "localhost",
  dialect: "mysql",
};

const dbSequelize = new Sequelize(
  databaseConfig.database,
  databaseConfig.username,
  databaseConfig.password,
  {
    host: databaseConfig.host,
    dialect: databaseConfig.dialect,
  }
);

dbSequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err:any) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = {
  dbSequelize,
};
