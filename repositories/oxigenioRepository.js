const IOxigenioRepository = require("../interface/iOxigenioRepository");
const { Oxigenio } = require("../data/dbContext");

class OxigenioRepository extends IOxigenioRepository {
    constructor() {
        super();
    }

    async add(leitura_id, valor) {
        try {
            const newOxigenio = await Oxigenio.create({ leitura_id, valor });
            return newOxigenio;
        } catch (error) {
            throw new Error('Error creating oxygen level reading: ' + error.message);
        }
    }

    async getById(id) {
        try {
            const oxigenio = await Oxigenio.findByPk(id);
            return oxigenio;
        } catch (error) {
            throw new Error('Error fetching oxygen level by ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const oxigenios = await Oxigenio.findAll();
            return oxigenios;
        } catch (error) {
            throw new Error('Error fetching all oxygen level readings: ' + error.message);
        }
    }

    async update(id, newData) {
        try {
            const oxigenio = await Oxigenio.findByPk(id);
            if (!oxigenio) {
                throw new Error('Oxygen level reading not found');
            }
            await oxigenio.update(newData);
        } catch (error) {
            throw new Error('Error updating oxygen level reading: ' + error.message);
        }
    }

    async delete(id) {
        try {
            const oxigenio = await Oxigenio.findByPk(id);
            if (!oxigenio) {
                throw new Error('Oxygen level reading not found');
            }
            await oxigenio.destroy();
        } catch (error) {
            throw new Error('Error deleting oxygen level reading: ' + error.message);
        }
    }
}

module.exports = OxigenioRepository;
