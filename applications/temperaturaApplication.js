const ITemperaturaRepository = require("../interface/iTemperaturaRepository");

class TemperaturaApplication {
    constructor(temperaturaRepository) {
        this.temperaturaRepository = temperaturaRepository;
    }

    async add(leitura_id, valor) {
        try {
            const newTemperatura = await this.temperaturaRepository.add(leitura_id, valor);
            return newTemperatura;
        } catch (error) {
            throw new Error("Error adding temperature reading: " + error.message);
        }
    }

    async getById(id) {
        try {
            const temperatura = await this.temperaturaRepository.getById(id);
            return temperatura;
        } catch (error) {
            throw new Error("Error fetching temperature by ID: " + error.message);
        }
    }

    async getAll() {
        try {
            const temperaturas = await this.temperaturaRepository.getAll();
            return temperaturas;
        } catch (error) {
            throw new Error("Error fetching all temperature readings: " + error.message);
        }
    }

    async update(id, newData) {
        try {
            await this.temperaturaRepository.update(id, newData);
        } catch (error) {
            throw new Error("Error updating temperature reading: " + error.message);
        }
    }

    async delete(id) {
        try {
            await this.temperaturaRepository.delete(id);
        } catch (error) {
            throw new Error("Error deleting temperature reading: " + error.message);
        }
    }
}

module.exports = TemperaturaApplication;
