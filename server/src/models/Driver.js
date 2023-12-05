const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
    id: {
      type: DataTypes.UUID, // "123n123-124n1243-1243n12"
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      unique: true // Asegura que sea único
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    nationality:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate:{
      type: DataTypes.DATE,
      allowNull: false,
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, { timestamps: false });
};