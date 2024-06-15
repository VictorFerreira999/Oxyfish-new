const ILeituraRepository = require("../interface/iLeituraRepository");
const { Leitura } = require("../data/dbContext");

class LeituraRepository extends ILeituraRepository {
    constructor() {
        super();
    }

    async getById(id) {
        try {
            const leitura = await Leitura.findByPk(id);
            return leitura;
        } catch (error) {
            throw new Error('Erro ao buscar leitura por ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const leituras = await Leitura.findAll();
            return leituras;
        } catch (error) {
            throw new Error('Erro ao buscar todas as leituras: ' + error.message);
        }
    }

    async add(arduino_id, data_hora) {
        try {
            const newLeitura = await Leitura.create({ arduino_id, data_hora });
            return newLeitura;
        } catch (error) {
            throw new Error('Erro ao criar nova leitura: ' + error.message);
        }
    }

    async update(id, newData) {
        try {
            const leitura = await Leitura.findByPk(id);
            if (!leitura) {
                throw new Error('Leitura não encontrada');
            }
            await leitura.update(newData);
            return leitura;
        } catch (error) {
            throw new Error('Erro ao atualizar leitura: ' + error.message);
        }
    }

    async delete(id) {
        try {
            const leitura = await Leitura.findByPk(id);
            if (!leitura) {
                throw new Error('Leitura não encontrada');
            }
            await leitura.destroy();
        } catch (error) {
            throw new Error('Erro ao deletar leitura: ' + error.message);
        }
    }
}

module.exports = LeituraRepository;
