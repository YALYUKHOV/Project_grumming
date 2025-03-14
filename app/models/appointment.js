import { DataTypes } from 'sequelize';

const AppointmentModel = (sequelize) => {
  return sequelize.define('Appointment', {
    id_appointment: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_clients: { type: DataTypes.INTEGER, allowNull: false },
    id_service: { type: DataTypes.INTEGER, allowNull: false },
    id_employee: { type: DataTypes.INTEGER, allowNull: false },
    id_schedule: { type: DataTypes.INTEGER, allowNull: false },
    status: {
      type: Sequelize.ENUM('ожидание', 'подтверждено', 'завершено'),
      allowNull: false,
      defaultValue: 'ожидание'
    },
  }, { timestamps: false });
};

export default AppointmentModel;
