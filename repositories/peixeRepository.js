const IPeixeRepository = require("../interface/iPeixeRepository");
const { Peixe } = require("../data/dbContext");

class PeixeRepository extends IPeixeRepository {
    constructor() {
        super();
    }

    async getById(id) {
        try {
            const peixe = await Peixe.findByPk(id);
            return peixe;
        } catch (error) {
            throw new Error('Erro ao buscar peixe por ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const peixes = await Peixe.findAll();
            return peixes;
        } catch (error) {
            throw new Error('Erro ao buscar todos os peixes: ' + error.message);
        }
    }

    async add(criatorio_id, especie, quantidade) {
        try {
            const newPeixe = await Peixe.create({ criatorio_id, especie, quantidade });
            return newPeixe;
        } catch (error) {
            throw new Error('Erro ao criar novo peixe: ' + error.message);
        }
    }

    async update(id, newData) {
        try {
            const peixe = await Peixe.findByPk(id);
            if (!peixe) {
                throw new Error('Peixe não encontrado');
            }
            await peixe.update(newData);
            return peixe;
        } catch (error) {
            throw new Error('Erro ao atualizar peixe: ' + error.message);
        }
    }

    async delete(id) {
        try {
            const peixe = await Peixe.findByPk(id);
            if (!peixe) {
                throw new Error('Peixe não encontrado');
            }
            await peixe.destroy();
        } catch (error) {
            throw new Error('Erro ao deletar peixe: ' + error.message);
        }
    }
}

module.exports = PeixeRepository;
