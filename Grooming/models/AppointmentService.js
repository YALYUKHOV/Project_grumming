const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const AppointmentService = sequelize.define("appointment_services", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  appointment_id: { type: DataTypes.INTEGER, allowNull: false },
  service_id: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = AppointmentService;
