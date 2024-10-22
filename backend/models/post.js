const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Post extends Model {}

Post.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
},
  {
    sequelize: sequelizeInstance,
    modelName: 'posts',
    timestamps: true,
    freezeTableName: true
  }
);

module.exports = Post;