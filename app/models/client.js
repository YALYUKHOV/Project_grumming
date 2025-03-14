import { DataTypes } from 'sequelize';

const ClientModel = (sequelize) => {
  return sequelize.define('Client', {
    id_clients: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    registration_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  }, { timestamps: false });
};

export default ClientModel;
