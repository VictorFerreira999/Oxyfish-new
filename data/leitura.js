const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Leitura = sequelize.define('leitura', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        arduino_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'arduino',
                key: 'id',
            },
        },
        data_hora: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, { freezeTableName: true, timestamps: false });

    return Leitura;
};
