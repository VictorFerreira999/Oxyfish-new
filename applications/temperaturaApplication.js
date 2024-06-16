class TemperaturaApplication {
    constructor(temperaturaRepository) {
        this.temperaturaRepository = temperaturaRepository;
    }

    async add(data) {
        try {
            const novaTemperatura = await this.temperaturaRepository.add(data);
            return novaTemperatura;
        } catch (error) {
            throw new Error('Erro ao adicionar temperatura: ' + error.message);
        }
    }

    async getById(id) {
        try {
            const temperatura = await this.temperaturaRepository.getById(id);
            return temperatura;
        } catch (error) {
            throw new Error('Erro ao buscar temperatura por ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const temperaturas = await this.temperaturaRepository.getAll();
            return temperaturas;
        } catch (error) {
            throw new Error('Erro ao buscar todas as temperaturas: ' + error.message);
        }
    }

    async update(id, newData) {
        try {
            await this.temperaturaRepository.update(id, newData);
        } catch (error) {
            throw new Error('Erro ao atualizar temperatura: ' + error.message);
        }
    }

    async delete(id) {
        try {
            await this.temperaturaRepository.delete(id);
        } catch (error) {
            throw new Error('Erro ao deletar temperatura: ' + error.message);
        }
    }
}

module.exports = TemperaturaApplication;
