const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  },
},
  {
    sequelize: sequelizeInstance,
    modelName: 'users',
    timestamps: true,
    freezeTableName: true
  }
);

module.exports = User;