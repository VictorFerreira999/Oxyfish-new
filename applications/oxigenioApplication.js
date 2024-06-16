class OxigenioApplication {
    constructor(oxigenioRepository) {
        this.oxigenioRepository = oxigenioRepository;
    }

    async add(data) {
        try {
            const novoOxigenio = await this.oxigenioRepository.add(data);
            return novoOxigenio;
        } catch (error) {
            throw new Error('Erro ao adicionar oxigênio: ' + error.message);
        }
    }

    async getById(id) {
        try {
            const oxigenio = await this.oxigenioRepository.getById(id);
            return oxigenio;
        } catch (error) {
            throw new Error('Erro ao buscar oxigênio por ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const oxigenios = await this.oxigenioRepository.getAll();
            return oxigenios;
        } catch (error) {
            throw new Error('Erro ao buscar todos os oxigênios: ' + error.message);
        }
    }

    async update(id, newData) {
        try {
            await this.oxigenioRepository.update(id, newData);
        } catch (error) {
            throw new Error('Erro ao atualizar oxigênio: ' + error.message);
        }
    }

    async delete(id) {
        try {
            await this.oxigenioRepository.delete(id);
        } catch (error) {
            throw new Error('Erro ao deletar oxigênio: ' + error.message);
        }
    }
}

module.exports = OxigenioApplication;
