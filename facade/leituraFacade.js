class LeituraFacade {
    constructor(leituraApplication) {
        this.leituraApplication = leituraApplication;
    }

    async add(data) {
        try {
            const novaLeitura = await this.leituraApplication.add(data);
            return novaLeitura;
        } catch (error) {
            throw new Error('Erro ao adicionar Leitura: ' + error.message);
        }
    }

    async getById(id) {
        try {
            const leitura = await this.leituraApplication.getById(id);
            return leitura;
        } catch (error) {
            throw new Error('Erro ao obter Leitura por ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const leituras = await this.leituraApplication.getAll();
            return leituras;
        } catch (error) {
            throw new Error('Erro ao obter todas as Leituras: ' + error.message);
        }
    }

    async update(id, newData) {
        try {
            await this.leituraApplication.update(id, newData);
        } catch (error) {
            throw new Error('Erro ao atualizar Leitura: ' + error.message);
        }
    }

    async delete(id) {
        try {
            await this.leituraApplication.delete(id);
        } catch (error) {
            throw new Error('Erro ao deletar Leitura: ' + error.message);
        }
    }
}

module.exports = LeituraFacade;
