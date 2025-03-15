const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Employee = require("./Employee");

const Schedule = sequelize.define("Schedule", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  employee_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Employee, key: 'id' } },
  date: { type: DataTypes.DATE, allowNull: false },
});

module.exports = Schedule;
