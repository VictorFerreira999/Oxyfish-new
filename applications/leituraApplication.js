class LeituraApplication {
    constructor(leituraRepository) {
        this.leituraRepository = leituraRepository;
    }

    async add(data) {
        try {
            const novaLeitura = await this.leituraRepository.add(data);
            return novaLeitura;
        } catch (error) {
            throw new Error('Erro ao adicionar leitura: ' + error.message);
        }
    }

    async getById(id) {
        try {
            const leitura = await this.leituraRepository.getById(id);
            return leitura;
        } catch (error) {
            throw new Error('Erro ao buscar leitura por ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const leituras = await this.leituraRepository.getAll();
            return leituras;
        } catch (error) {
            throw new Error('Erro ao buscar todas as leituras: ' + error.message);
        }
    }

    async update(id, newData) {
        try {
            await this.leituraRepository.update(id, newData);
        } catch (error) {
            throw new Error('Erro ao atualizar leitura: ' + error.message);
        }
    }

    async delete(id) {
        try {
            await this.leituraRepository.delete(id);
        } catch (error) {
            throw new Error('Erro ao deletar leitura: ' + error.message);
        }
    }
}

module.exports = LeituraApplication;
