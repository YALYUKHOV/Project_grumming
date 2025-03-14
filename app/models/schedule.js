import { DataTypes } from 'sequelize';

const ScheduleModel = (sequelize) => {
  return sequelize.define('Schedule', {
    id_schedule: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_employees: { type: DataTypes.INTEGER, allowNull: false },
    date: DataTypes.DATE,
    slot_status: DataTypes.STRING,
  }, { timestamps: false });
};

export default ScheduleModel;
