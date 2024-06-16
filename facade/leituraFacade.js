class LeituraFacade {
    constructor(leituraApplication) {
        this.leituraApplication = leituraApplication;
    }

    async add(leitura) {
        try {
            const novaLeitura = await this.leituraApplication.add(leitura);
            return novaLeitura;
        } catch (error) {
            throw new Error("Erro ao adicionar leitura: " + error.message);
        }
    }

    async getById(id) {
        try {
            const leitura = await this.leituraApplication.getById(id);
            return leitura;
        } catch (error) {
            throw new Error("Erro ao obter leitura por ID: " + error.message);
        }
    }

    async getAll() {
        try {
            const leituras = await this.leituraApplication.getAll();
            return leituras;
        } catch (error) {
            throw new Error("Erro ao obter todas as leituras: " + error.message);
        }
    }

    async update(id, newData) {
        try {
            await this.leituraApplication.update(id, newData);
        } catch (error) {
            throw new Error("Erro ao atualizar leitura: " + error.message);
        }
    }

    async delete(id) {
        try {
            await this.leituraApplication.delete(id);
        } catch (error) {
            throw new Error("Erro ao deletar leitura: " + error.message);
        }
    }
}

module.exports = LeituraFacade;
