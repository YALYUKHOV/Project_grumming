import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

// Проверка, что все необходимые переменные окружения заданы
const requiredEnvVars = ['DB_NAME', 'DB_USER', 'DB_PASS', 'DB_HOST', 'DB_PORT'];
requiredEnvVars.forEach((varName) => {
  if (!process.env[varName]) {
    console.error(`❌ Ошибка: Переменная окружения ${varName} не задана.`);
    process.exit(1);
  }
});

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432, // Если порт не задан, используем 5432
  dialect: 'postgres',
  logging: false, // Отключаем логи запросов
});

export default sequelize;
