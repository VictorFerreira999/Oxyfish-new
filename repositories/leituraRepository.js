// repositories/LeituraRepository.js
const ILeituraRepository = require("../interface/iLeituraRepository");
const { Leitura } = require("../data/dbContext");
const LeituraFactory = require("../factories/leituraFactory");

class LeituraRepository extends ILeituraRepository {
    constructor() {
        super();
    }

    async getById(id) {
        try {
            const leituraData = await Leitura.findByPk(id);
            if (leituraData) {
                return LeituraFactory.criarLeitura(leituraData);
            }
            return null;
        } catch (error) {
            throw new Error('Erro ao buscar leitura por ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const leiturasData = await Leitura.findAll();
            return leiturasData.map(leituraData => LeituraFactory.criarLeitura(leituraData));
        } catch (error) {
            throw new Error('Erro ao buscar todas as leituras: ' + error.message);
        }
    }

    async add(data) {
        try {
            const newLeituraData = await Leitura.create(data);
            return LeituraFactory.criarLeitura(newLeituraData);
        } catch (error) {
            throw new Error('Erro ao adicionar leitura: ' + error.message);
        }
    }

    async update(id, data) {
        try {
            await Leitura.update(data, { where: { id } });
            const updatedLeituraData = await this.getById(id);
            return LeituraFactory.criarLeitura(updatedLeituraData);
        } catch (error) {
            throw new Error('Erro ao atualizar leitura: ' + error.message);
        }
    }

    async delete(id) {
        try {
            await Leitura.destroy({ where: { id } });
        } catch (error) {
            throw new Error('Erro ao deletar leitura: ' + error.message);
        }
    }
}

module.exports = LeituraRepository;
