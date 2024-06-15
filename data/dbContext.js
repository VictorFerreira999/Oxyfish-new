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
const Ph = require("./ph")(sequelize, DataTypes);
const Oxigenio = require("./oxigenio")(sequelize, DataTypes);
const Temperatura = require("./temperatura")(sequelize, DataTypes);
const UsuarioCriatorio = require("./usuarioCriatorio")(sequelize, DataTypes);

// Configurando associações

// Usuario <-> Criatorio (N:N)
Usuario.belongsToMany(Criatorio, {
  through: UsuarioCriatorio,
  foreignKey: 'usuario_id'
});
Criatorio.belongsToMany(Usuario, {
  through: UsuarioCriatorio,
  foreignKey: 'criatorio_id'
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

// Leitura <-> Ph, Oxigenio, Temperatura
Leitura.hasOne(Ph, {
  foreignKey: 'leitura_id'
});
Ph.belongsTo(Leitura, {
  foreignKey: 'leitura_id'
});

Leitura.hasOne(Oxigenio, {
  foreignKey: 'leitura_id'
});
Oxigenio.belongsTo(Leitura, {
  foreignKey: 'leitura_id'
});

Leitura.hasOne(Temperatura, {
  foreignKey: 'leitura_id'
});
Temperatura.belongsTo(Leitura, {
  foreignKey: 'leitura_id'
});

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Tabelas criadas com sucesso!");
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
  Ph,
  Oxigenio,
  Temperatura,
  UsuarioCriatorio
};
