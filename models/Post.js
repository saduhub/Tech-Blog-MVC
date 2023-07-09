// Require sequelize and deconstruct Model and DataTypes.
const { Model, DataTypes } = require('sequelize');
// Import connection to DB.
const sequelize = require('../config/connection');
// Post model will have all of the qualities of the Model object.
class Post extends Model {}
// Define model belonging to post (Post schema). 
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    // Also an option if timestamps is set to true
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
    modelName: 'post',
  }
);

// (async () => {
//     try {
//       await sequelize.sync();
//       console.log('Model synchronized with the database successfully.');
//     } catch (error) {
//       console.error('Error synchronizing model with the database:', error);
//     }
//   })();

module.exports = Post;