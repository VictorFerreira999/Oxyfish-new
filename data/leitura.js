const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Leitura = sequelize.define(
    "leitura",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
      },
      arduino_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      data_hora: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      temperatura: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      ph: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      oxigenio: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return Leitura;
};
