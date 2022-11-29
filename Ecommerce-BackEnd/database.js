const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://postgres:1597530@localhost:5432/inmuebles",
  {
    logging: false,
  }
);

module.exports = { sequelize };
