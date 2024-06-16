class CriatorioFacade {
    constructor(criatorioApplication) {
        this.criatorioApplication = criatorioApplication;
    }

    async add(data) {
        try {
            const novoCriatorio = await this.criatorioApplication.add(data);
            return novoCriatorio;
        } catch (error) {
            throw new Error('Erro ao adicionar Criatório: ' + error.message);
        }
    }

    async getById(id) {
        try {
            const criatorio = await this.criatorioApplication.getById(id);
            return criatorio;
        } catch (error) {
            throw new Error('Erro ao obter Criatório por ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const criatorios = await this.criatorioApplication.getAll();
            return criatorios;
        } catch (error) {
            throw new Error('Erro ao obter todos os Criatórios: ' + error.message);
        }
    }

    async update(id, newData) {
        try {
            await this.criatorioApplication.update(id, newData);
        } catch (error) {
            throw new Error('Erro ao atualizar Criatório: ' + error.message);
        }
    }

    async delete(id) {
        try {
            await this.criatorioApplication.delete(id);
        } catch (error) {
            throw new Error('Erro ao deletar Criatório: ' + error.message);
        }
    }
}

module.exports = CriatorioFacade;
