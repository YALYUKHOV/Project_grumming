const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Service = sequelize.define("Service", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING },
  price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
});

Service.associate = (models) => {
  Service.belongsToMany(models.Appointment, { through: "appointment_services" });
};

module.exports = Service;