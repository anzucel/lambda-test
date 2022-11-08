const Sequelize = require('sequelize')
const Models = require("../models");

const DBNAME = process.env.DBNAME;
const USER =  process.env.USER;
const PASSWORD = process.env.PASSWORD;

const sequelize = new Sequelize(
  DBNAME,
  USER,
  PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    port: parseInt(process.env.DBPORT, 0)
  }
);

for (const modelDefiner of Models) {
  modelDefiner(sequelize);
}

module.exports = sequelize;
