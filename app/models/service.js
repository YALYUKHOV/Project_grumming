import { DataTypes } from 'sequelize';

const ServiceModel = (sequelize) => {
  return sequelize.define('Service', {
    id_service: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
  }, { timestamps: false });
};

export default ServiceModel;
