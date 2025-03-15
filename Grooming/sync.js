const sequelize = require("./db");
const Client = require("./models/Client");
const Employee = require("./models/Employee");
const Service = require("./models/Service");
const Appointment = require("./models/Appointment");
const Schedule = require("./models/Schedule");
const AppointmentService = require("./models/AppointmentService");

async function syncDatabase() {
  try {
    await sequelize.sync({ force: true }); // Пересоздание таблиц
    console.log("База данных синхронизирована!");
  } catch (error) {
    console.error("Ошибка при синхронизации:", error);
  }
}

syncDatabase();