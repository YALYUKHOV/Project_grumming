import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();


import sequelize from '../config/database.js';
import Employee from './Employee.js';
import Schedule from './Schedule.js';
import Client from './Client.js';
import Service from './Service.js';
import Appointment from './Appointment.js';
import User from './User.js';

export { sequelize, Employee, Schedule, Client, Service, Appointment, User };

// Настройки БД из переменных окружения
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, // ✅ Добавляем порт
  dialect: 'postgres',
  logging: false,
});

// Импортируем модели
const Employee = EmployeeModel(sequelize);
const Schedule = ScheduleModel(sequelize);
const Client = ClientModel(sequelize);
const Service = ServiceModel(sequelize);
const Appointment = AppointmentModel(sequelize);
const User = UserModel(sequelize);

// Устанавливаем связи
Employee.hasMany(Schedule, { foreignKey: 'id_employees' });
Schedule.belongsTo(Employee, { foreignKey: 'id_employees' });

Client.hasMany(Appointment, { foreignKey: 'id_clients' });
Appointment.belongsTo(Client, { foreignKey: 'id_clients' });

Service.hasMany(Appointment, { foreignKey: 'id_service' });
Appointment.belongsTo(Service, { foreignKey: 'id_service' });

Employee.hasMany(Appointment, { foreignKey: 'id_employee' });
Appointment.belongsTo(Employee, { foreignKey: 'id_employee' });

Schedule.hasMany(Appointment, { foreignKey: 'id_schedule' });
Appointment.belongsTo(Schedule, { foreignKey: 'id_schedule' });

module.exports = { sequelize, Employee, Schedule, Client, Service, Appointment, User };

// Проверяем, что переменные окружения загружены
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASS);
console.log('DB_NAME:', process.env.DB_NAME);
