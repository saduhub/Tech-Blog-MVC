// Require sequelize and deconstruct Model and DataTypes.
const { Model, DataTypes } = require('sequelize');
// Import connection to DB.
const sequelize = require('../config/connection');
// const Comment = require('./Comment');
// const BlogPost = require('./BlogPost');
// Comment model will have all of the qualities of the Model object.
class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id',
      },
    },
    // createdAt: {
    //   type: DataTypes.DATE,
    //   defaultValue: DataTypes.NOW,
    // },
  },
  {
    sequelize,
    // Sequelize adds two timestamp columns to table: createdAt and updatedAt
    timestamps: true,
    // use the model name as it is without any modification. 
    freezeTableName: true,
    // convert the column names to snake_case
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;