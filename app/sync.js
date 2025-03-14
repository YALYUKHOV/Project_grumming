import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

console.log('DB_HOST:', process.env.DB_HOST);

// Создаем экземпляр Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false,
});

async function syncDatabase() {
  try {
    await sequelize.authenticate();
    console.log('✅ Подключение успешно');

    await sequelize.sync({ force: false }); // Установи force: true, если хочешь пересоздать таблицы
    console.log("База данных синхронизирована!");
  } catch (error) {
    console.error("Ошибка синхронизации базы данных:", error);
  } finally {
    process.exit();
  }
}

syncDatabase();
