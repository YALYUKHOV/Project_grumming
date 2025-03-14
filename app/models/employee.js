import { DataTypes } from 'sequelize';

const EmployeeModel = (sequelize) => {
  return sequelize.define('Employee', {
    id_employees: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
  }, { timestamps: false });
};

export default EmployeeModel;
