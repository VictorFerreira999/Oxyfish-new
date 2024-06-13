const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Criatorio = sequelize.define(
    "criatorio",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
      },
      nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      localizacao: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return Criatorio;
};
