const ICriatorioRepository = require("../interface/ICriatorioRepository");
const { Criatorio } = require("../data/dbContext");

class CriatorioRepository extends ICriatorioRepository {
    constructor() {
        super();
    }

    async getById(id) {
        try {
            const criatorio = await Criatorio.findByPk(id);
            return criatorio;
        } catch (error) {
            throw new Error('Erro ao buscar criatório por ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const criatorios = await Criatorio.findAll();
            return criatorios;
        } catch (error) {
            throw new Error('Erro ao buscar todos os criatórios: ' + error.message);
        }
    }

    async add(data) {
        try {
            const newCriatorio = await Criatorio.create(data);
            return newCriatorio;
        } catch (error) {
            throw new Error('Erro ao criar novo criatório: ' + error.message);
        }
    }

    async update(id, newData) {
        try {
            const criatorio = await Criatorio.findByPk(id);
            if (!criatorio) {
                throw new Error('Criadouro não encontrado');
            }
            await criatorio.update(newData);
        } catch (error) {
            throw new Error('Erro ao atualizar criatório: ' + error.message);
        }
    }

    async delete(id) {
        try {
            const criatorio = await Criatorio.findByPk(id);
            if (!criatorio) {
                throw new Error('Criadouro não encontrado');
            }
            await criatorio.destroy();
        } catch (error) {
            throw new Error('Erro ao deletar criatório: ' + error.message);
        }
    }
}

module.exports = CriatorioRepository;
