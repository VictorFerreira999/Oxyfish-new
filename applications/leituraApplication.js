class LeituraApplication {
    constructor(leituraRepository) {
        this.leituraRepository = leituraRepository;
    }

    async getById(id) {
        try {
            const leitura = await this.leituraRepository.getById(id);
            if (!leitura) {
                throw new Error('Leitura não encontrada');
            }
            return leitura;
        } catch (error) {
            throw new Error("Erro ao obter leitura por ID: " + error.message);
        }
    }

    async getAll() {
        try {
            return await this.leituraRepository.getAll();
        } catch (error) {
            throw new Error("Erro ao obter todas as leituras: " + error.message);
        }
    }

    async add(data) {
        try {
            return await this.leituraRepository.add(data);
        } catch (error) {
            throw new Error("Erro ao adicionar leitura: " + error.message);
        }
    }

    async update(id, data) {
        try {
            return await this.leituraRepository.update(id, data);
        } catch (error) {
            throw new Error("Erro ao atualizar leitura: " + error.message);
        }
    }

    async delete(id) {
        try {
            await this.leituraRepository.delete(id);
        } catch (error) {
            throw new Error("Erro ao deletar leitura: " + error.message);
        }
    }
}

module.exports = LeituraApplication;
