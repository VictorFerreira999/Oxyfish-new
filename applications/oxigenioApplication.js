const IOxigenioRepository = require("../interface/iOxigenioRepository");

class OxigenioApplication {
    constructor(oxigenioRepository) {
        this.oxigenioRepository = oxigenioRepository;
    }

    async add(leitura_id, valor) {
        try {
            const newOxigenio = await this.oxigenioRepository.add(leitura_id, valor);
            return newOxigenio;
        } catch (error) {
            throw new Error("Error adding oxygen level reading: " + error.message);
        }
    }

    async getById(id) {
        try {
            const oxigenio = await this.oxigenioRepository.getById(id);
            return oxigenio;
        } catch (error) {
            throw new Error("Error fetching oxygen level by ID: " + error.message);
        }
    }

    async getAll() {
        try {
            const oxigenios = await this.oxigenioRepository.getAll();
            return oxigenios;
        } catch (error) {
            throw new Error("Error fetching all oxygen level readings: " + error.message);
        }
    }

    async update(id, newData) {
        try {
            await this.oxigenioRepository.update(id, newData);
        } catch (error) {
            throw new Error("Error updating oxygen level reading: " + error.message);
        }
    }

    async delete(id) {
        try {
            await this.oxigenioRepository.delete(id);
        } catch (error) {
            throw new Error("Error deleting oxygen level reading: " + error.message);
        }
    }
}

module.exports = OxigenioApplication;
