const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
   const Oxigenio = sequelize.define('oxigenio', {
       id: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           allowNull: false,
       },
       leitura_id: {
           type: DataTypes.INTEGER,
           allowNull: false,
       },
       valor: {
           type: DataTypes.DECIMAL(5, 2),
           allowNull: false,
       },
   }, { freezeTableName: true, timestamps: false });

   return Oxigenio;
};
