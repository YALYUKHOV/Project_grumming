const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Appointment = sequelize.define("Appointment", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  client_id: { type: DataTypes.INTEGER, allowNull: false },
  employee_id: { type: DataTypes.INTEGER, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false, defaultValue: "запланировано" },
  schedule_id: { type: DataTypes.INTEGER, allowNull: true, references: { model: 'Schedules', key: 'id' } },
});

Appointment.associate = (models) => {
  Appointment.belongsToMany(models.Service, { through: "appointment_services" });
  Appointment.belongsTo(models.Client, { foreignKey: "client_id" });
  Appointment.belongsTo(models.Employee, { foreignKey: "employee_id" });
  Appointment.belongsTo(models.Schedule, { foreignKey: "schedule_id" });
};

module.exports = Appointment;
