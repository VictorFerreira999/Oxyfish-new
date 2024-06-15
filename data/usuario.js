const { Sequelize, DataTypes } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('usuario', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
      },
      nome: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
      },
      senha: {
          type: DataTypes.STRING,
          allowNull: false,
      },
  }, { freezeTableName: true, timestamps: false });

  return Usuario;
};
