const ITemperaturaRepository = require("../interface/iTemperaturaRepository");
const { Temperatura } = require("../data/dbContext");

class TemperaturaRepository extends ITemperaturaRepository {
    constructor() {
        super();
    }

    async add(leitura_id, valor) {
        try {
            const newTemperatura = await Temperatura.create({ leitura_id, valor });
            return newTemperatura;
        } catch (error) {
            throw new Error('Error creating temperature reading: ' + error.message);
        }
    }

    async getById(id) {
        try {
            const temperatura = await Temperatura.findByPk(id);
            return temperatura;
        } catch (error) {
            throw new Error('Error fetching temperature by ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const temperaturas = await Temperatura.findAll();
            return temperaturas;
        } catch (error) {
            throw new Error('Error fetching all temperature readings: ' + error.message);
        }
    }

    async update(id, newData) {
        try {
            const temperatura = await Temperatura.findByPk(id);
            if (!temperatura) {
                throw new Error('Temperature reading not found');
            }
            await temperatura.update(newData);
        } catch (error) {
            throw new Error('Error updating temperature reading: ' + error.message);
        }
    }

    async delete(id) {
        try {
            const temperatura = await Temperatura.findByPk(id);
            if (!temperatura) {
                throw new Error('Temperature reading not found');
            }
            await temperatura.destroy();
        } catch (error) {
            throw new Error('Error deleting temperature reading: ' + error.message);
        }
    }
}

module.exports = TemperaturaRepository;
