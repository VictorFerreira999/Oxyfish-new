const IOxigenioRepository = require("../interface/iOxigenioRepository");
const { Oxigenio } = require("../data/dbContext");

class OxigenioRepository extends iOxigenioRepository {
    constructor() {
        super();
    }

    async add(data) {
        try {
            const novoOxigenio = await Oxigenio.create(data);
            return novoOxigenio;
        } catch (error) {
            throw new Error('Erro ao adicionar oxigênio: ' + error.message);
        }
    }

    async getById(id) {
        try {
            const oxigenio = await Oxigenio.findByPk(id);
            return oxigenio;
        } catch (error) {
            throw new Error('Erro ao buscar oxigênio por ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const oxigenios = await Oxigenio.findAll();
            return oxigenios;
        } catch (error) {
            throw new Error('Erro ao buscar todos os oxigênios: ' + error.message);
        }
    }

    async update(id, newData) {
        try {
            const oxigenio = await Oxigenio.findByPk(id);
            if (!oxigenio) {
                throw new Error('Oxigênio não encontrado');
            }
            await oxigenio.update(newData);
        } catch (error) {
            throw new Error('Erro ao atualizar oxigênio: ' + error.message);
        }
    }

    async delete(id) {
        try {
            const oxigenio = await Oxigenio.findByPk(id);
            if (!oxigenio) {
                throw new Error('Oxigênio não encontrado');
            }
            await oxigenio.destroy();
        } catch (error) {
            throw new Error('Erro ao deletar oxigênio: ' + error.message);
        }
    }
}

module.exports = OxigenioRepository;
