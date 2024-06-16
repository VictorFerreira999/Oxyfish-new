class PhApplication {
    constructor(phRepository) {
        this.phRepository = phRepository;
    }

    async add(data) {
        try {
            const novoPh = await this.phRepository.add(data);
            return novoPh;
        } catch (error) {
            throw new Error('Erro ao adicionar pH: ' + error.message);
        }
    }

    async getById(id) {
        try {
            const ph = await this.phRepository.getById(id);
            return ph;
        } catch (error) {
            throw new Error('Erro ao buscar pH por ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const phs = await this.phRepository.getAll();
            return phs;
        } catch (error) {
            throw new Error('Erro ao buscar todos os pHs: ' + error.message);
        }
    }

    async update(id, newData) {
        try {
            await this.phRepository.update(id, newData);
        } catch (error) {
            throw new Error('Erro ao atualizar pH: ' + error.message);
        }
    }

    async delete(id) {
        try {
            await this.phRepository.delete(id);
        } catch (error) {
            throw new Error('Erro ao deletar pH: ' + error.message);
        }
    }
}

module.exports = PhApplication;
