const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         type: DataTypes.UUID, // "123n123-124n1243-1243n12"
         primaryKey: true,
         defaultValue: DataTypes.UUIDV4
      },
      email:{
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            isEmail: true,
         },
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
      }
   }, { timestamps: false });
};
