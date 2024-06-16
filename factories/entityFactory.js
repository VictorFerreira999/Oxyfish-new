const PhEntity = require('../entities/phEntity');
const OxigenioEntity = require('../entities/oxigenioEntity');
const TemperaturaEntity = require('../entities/temperaturaEntity');

class EntityFactory {
    static createEntity(tableName, value) {
        switch (tableName) {
            case 'ph':
                return new PhEntity(value);
            case 'oxigenio':
                return new OxigenioEntity(value);
            case 'temperatura':
                return new TemperaturaEntity(value);
            default:
                throw new Error('Tabela não suportada');
        }
    }
}

module.exports = EntityFactory;
