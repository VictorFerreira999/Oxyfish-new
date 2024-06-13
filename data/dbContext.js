const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USERNAME,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    port: dbConfig.PORT,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado com sucesso!");
  })
  .catch((error) => {
    console.log("Erro ao tentar conectar: " + error);
  });

const Usuario = require("./usuario")(sequelize, DataTypes);
const Criatorio = require("./criatorio")(sequelize, DataTypes);
const Peixe = require("./peixe")(sequelize, DataTypes);
const Arduino = require("./arduino")(sequelize, DataTypes);
const Leitura = require("./leitura")(sequelize, DataTypes);

// Configurando associações

// Usuario <-> Criatorio
Usuario.hasMany(Criatorio, {
  foreignKey: "usuario_id",
});
Criatorio.belongsTo(Usuario, {
  foreignKey: "usuario_id",
});

// Criatorio <-> Peixe
Criatorio.hasMany(Peixe, {
  foreignKey: "criatorio_id",
});
Peixe.belongsTo(Criatorio, {
  foreignKey: "criatorio_id",
});

// Criatorio <-> Arduino
Criatorio.hasMany(Arduino, {
  foreignKey: "criatorio_id",
});
Arduino.belongsTo(Criatorio, {
  foreignKey: "criatorio_id",
});

// Arduino <-> Leitura
Arduino.hasMany(Leitura, {
  foreignKey: "arduino_id",
});
Leitura.belongsTo(Arduino, {
  foreignKey: "arduino_id",
});

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Tabela criada com sucesso!");
  })
  .catch((error) => {
    console.log("Erros: " + error);
  });

module.exports = {
  Usuario,
  Criatorio,
  Peixe,
  Arduino,
  Leitura,
};
