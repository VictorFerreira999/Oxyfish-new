class TemperaturaFacade {
    constructor(temperaturaApplication) {
        this.temperaturaApplication = temperaturaApplication;
    }

    async add(data) {
        try {
            const novaTemperatura = await this.temperaturaApplication.add(data);
            return novaTemperatura;
        } catch (error) {
            throw new Error('Erro ao adicionar Temperatura: ' + error.message);
        }
    }

    async getById(id) {
        try {
            const temperatura = await this.temperaturaApplication.getById(id);
            return temperatura;
        } catch (error) {
            throw new Error('Erro ao obter Temperatura por ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const temperaturas = await this.temperaturaApplication.getAll();
            return temperaturas;
        } catch (error) {
            throw new Error('Erro ao obter todas as Temperaturas: ' + error.message);
        }
    }

    async update(id, newData) {
        try {
            await this.temperaturaApplication.update(id, newData);
        } catch (error) {
            throw new Error('Erro ao atualizar Temperatura: ' + error.message);
        }
    }

    async delete(id) {
        try {
            await this.temperaturaApplication.delete(id);
        } catch (error) {
            throw new Error('Erro ao deletar Temperatura: ' + error.message);
        }
    }
}

module.exports = TemperaturaFacade;
