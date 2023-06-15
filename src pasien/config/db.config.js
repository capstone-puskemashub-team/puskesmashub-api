require('dotenv').config();
const fs = require('fs')
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.MYSQL_DB_NAME,
  process.env.MYSQL_DB_USER,
  {
    host: process.env.MYSQL_DB_HOST,
    port: process.env.MYSQL_DB_PORT,
    dialect: 'mysql',
    logging: true,
    // dialectOptions: {
    //   ssl: {
    //     ca: fs.readFileSync(__dirname + '/../database/cert/server-ca.pem'),
    //     key: fs.readFileSync(__dirname + '/../database/cert/client-key.pem'),
    //     cert: fs.readFileSync(__dirname + '/../database/cert/client-cert.pem')
    //   }
    // },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
)

module.exports = {
  sequelize,
  Sequelize
}
