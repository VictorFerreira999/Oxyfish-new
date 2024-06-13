const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Arduino = sequelize.define(
    "arduino",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
      },
      criatorio_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      localizacao: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return Arduino;
};
