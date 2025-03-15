const { DataTypes } = require("sequelize");
const sequelize = require("../db");

// Модель для клиентов
const Client = sequelize.define("Client", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: true, unique: true },
}, {
  timestamps: true,
});

module.exports = Client;