const sequelize = require("../db");
const Client = require("./Client");
const Employee = require("./Employee");
const Service = require("./Service");
const Appointment = require("./Appointment");
const Schedule = require("./Schedule");
const AppointmentService = require("./AppointmentService");

const models = { Client, Employee, Service, Appointment, Schedule, AppointmentService };
Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

// Связи
// Client.hasMany(Appointment, { foreignKey: "client_id", onDelete: "CASCADE" });
// Appointment.belongsTo(Client, { foreignKey: "client_id" });

Employee.hasMany(Appointment, { foreignKey: "employee_id", onDelete: "CASCADE" });
Appointment.belongsTo(Employee, { foreignKey: "employee_id" });

Employee.hasMany(Schedule, { foreignKey: "employee_id", onDelete: "CASCADE" });
Schedule.belongsTo(Employee, { foreignKey: "employee_id" });

Schedule.hasMany(Appointment, { foreignKey: "schedule_id", onDelete: "CASCADE" });
Appointment.belongsTo(Schedule, { foreignKey: "schedule_id" });

Appointment.belongsToMany(Service, { through: AppointmentService, foreignKey: "appointment_id" });
Service.belongsToMany(Appointment, { through: AppointmentService, foreignKey: "service_id" });

module.exports = {
  sequelize,
  Client,
  Employee,
  Service,
  Appointment,
  Schedule,
  AppointmentService,
};
