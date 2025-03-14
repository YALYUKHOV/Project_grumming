import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';

const UserModel = (sequelize) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    name: DataTypes.STRING,
  }, { timestamps: false });

  // Хеширование пароля перед сохранением
  User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  });

  return User;
};

export default UserModel;
