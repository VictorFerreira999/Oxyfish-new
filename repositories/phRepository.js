const IPhRepository = require("../interface/IPhRepository");
const { Ph } = require("../data/dbContext");

class PhRepository extends IPhRepository {
    constructor() {
        super();
    }

    async add(data) {
        try {
            const novoPh = await Ph.create(data);
            return novoPh;
        } catch (error) {
            throw new Error('Erro ao adicionar pH: ' + error.message);
        }
    }

    async getById(id) {
        try {
            const ph = await Ph.findByPk(id);
            return ph;
        } catch (error) {
            throw new Error('Erro ao buscar pH por ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const phs = await Ph.findAll();
            return phs;
        } catch (error) {
            throw new Error('Erro ao buscar todos os pHs: ' + error.message);
        }
    }

    async update(id, newData) {
        try {
            const ph = await Ph.findByPk(id);
            if (!ph) {
                throw new Error('pH não encontrado');
            }
            await ph.update(newData);
        } catch (error) {
            throw new Error('Erro ao atualizar pH: ' + error.message);
        }
    }

    async delete(id) {
        try {
            const ph = await Ph.findByPk(id);
            if (!ph) {
                throw new Error('pH não encontrado');
            }
            await ph.destroy();
        } catch (error) {
            throw new Error('Erro ao deletar pH: ' + error.message);
        }
    }
}

module.exports = PhRepository;
