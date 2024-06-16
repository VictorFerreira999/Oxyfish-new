const ICriatorioRepository = require("../interface/iCriatorioRepository");
const { Criatorio } = require("../data/dbContext");

class CriatorioRepository extends ICriatorioRepository {
    constructor() {
        super();
    }

    async add(data) {
        try {
            const novoCriatorio = await Criatorio.create(data);
            return novoCriatorio;
        } catch (error) {
            throw new Error('Erro ao adicionar criatório: ' + error.message);
        }
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

    async update(id, newData) {
        try {
            const criatorio = await Criatorio.findByPk(id);
            if (!criatorio) {
                throw new Error('Criatório não encontrado');
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
                throw new Error('Criatório não encontrado');
            }
            await criatorio.destroy();
        } catch (error) {
            throw new Error('Erro ao deletar criatório: ' + error.message);
        }
    }
}

module.exports = CriatorioRepository;
