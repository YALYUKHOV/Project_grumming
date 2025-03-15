const express = require("express");
const bodyParser = require("body-parser");
const { sequelize, Employee, Service, Appointment, Client } = require("./models");
const { serviceRoutes, clientRoutes, appointmentRoutes, employeeRoutes } = require("./routes");

const app = express();
app.use(bodyParser.json());
app.use("/services", serviceRoutes);
app.use("/clients", clientRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/employees", employeeRoutes);

// Запуск сервера
app.listen(3000, async () => {
  await sequelize.authenticate();
  console.log("Сервер запущен на http://localhost:3000");
});