const PhEntity = require('../entities/phEntity');
const OxigenioEntity = require('../entities/oxigenioEntity');
const TemperaturaEntity = require('../entities/temperaturaEntity');

class EntityFactory {
    static createEntity(tableName, data) {
        switch (tableName) {
            case 'ph':
                return new PhEntity(data.leitura_id, data.valor);
            case 'oxigenio':
                return new OxigenioEntity(data.leitura_id, data.valor);
            case 'temperatura':
                return new TemperaturaEntity(data.leitura_id, data.valor);
            default:
                throw new Error('Tabela não suportada');
        }
    }
}

module.exports = EntityFactory;
