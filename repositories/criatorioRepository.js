const ICriatorioRepository = require("../interface/iCriatorioRepository");
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

    async add(usuario_id, nome, localizacao) {
        try {
            const newCriatorio = await Criatorio.create({ usuario_id, nome, localizacao });
            return newCriatorio;
        } catch (error) {
            throw new Error('Erro ao criar novo criatório: ' + error.message);
        }
    }

    async update(id, newData) {
        try {
            const criatorio = await Criatorio.findByPk(id);
            if (!criatorio) {
                throw new Error('Criatório não encontrado');
            }
            await criatorio.update(newData);
            return criatorio;
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
