const IPhRepository = require("../interface/IPhRepository");

class PhApplication {
    constructor(phRepository) {
        this.phRepository = phRepository;
    }

    async add(leitura_id, valor) {
        try {
            const newPh = await this.phRepository.add(leitura_id, valor);
            return newPh;
        } catch (error) {
            throw new Error("Error adding pH reading: " + error.message);
        }
    }

    async getById(id) {
        try {
            const ph = await this.phRepository.getById(id);
            return ph;
        } catch (error) {
            throw new Error("Error fetching pH by ID: " + error.message);
        }
    }

    async getAll() {
        try {
            const phs = await this.phRepository.getAll();
            return phs;
        } catch (error) {
            throw new Error("Error fetching all pH readings: " + error.message);
        }
    }

    async update(id, newData) {
        try {
            await this.phRepository.update(id, newData);
        } catch (error) {
            throw new Error("Error updating pH reading: " + error.message);
        }
    }

    async delete(id) {
        try {
            await this.phRepository.delete(id);
        } catch (error) {
            throw new Error("Error deleting pH reading: " + error.message);
        }
    }
}

module.exports = PhApplication;
