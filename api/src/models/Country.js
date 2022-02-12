const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id : {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    flag : {
      type: DataTypes.STRING(),
      allowNull: false
    },
    continent : {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    capital : {
      type: DataTypes.STRING(),
      allowNull: false
    },
    area : {
      type: DataTypes.INTEGER(), // even Russia's area fits in 32 bits.
    },
    population : {
      type: DataTypes.INTEGER(), // even China's population fits in 32 bits.
    },
  });
};
