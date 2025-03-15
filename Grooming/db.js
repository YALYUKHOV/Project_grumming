const { Sequelize } = require("sequelize");
const config = require("./config/config.json");

const environment = process.env.NODE_ENV || "development";

const { username, password, database, host, dialect, port } = config[environment];

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  port,
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log(`Подключение к БД "${database}" (${environment}) успешно!`);
  } catch (error) {
    console.error("Ошибка подключения:", error);
  }
}

testConnection();

module.exports = sequelize;
