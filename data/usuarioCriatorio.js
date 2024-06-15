const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
   const UsuarioCriatorio = sequelize.define('usuarioCriatorio', {
       usuario_id: {
           type: DataTypes.INTEGER,
           references: {
               model: 'usuario',
               key: 'id',
           },
       },
       criatorio_id: {
           type: DataTypes.INTEGER,
           references: {
               model: 'criatorio',
               key: 'id',
           },
       },
   }, { freezeTableName: true, timestamps: false });

   return UsuarioCriatorio;
};
