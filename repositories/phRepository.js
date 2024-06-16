const IPhRepository = require("../interface/iPhRepository");
const { Ph } = require("../data/dbContext");

class PhRepository extends IPhRepository {
    constructor() {
        super();
    }

    async add(leitura_id, valor) {
        try {
            const newPh = await Ph.create({ leitura_id, valor });
            return newPh;
        } catch (error) {
            throw new Error('Error creating pH reading: ' + error.message);
        }
    }

    async getById(id) {
        try {
            const ph = await Ph.findByPk(id);
            return ph;
        } catch (error) {
            throw new Error('Error fetching pH by ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const phs = await Ph.findAll();
            return phs;
        } catch (error) {
            throw new Error('Error fetching all pH readings: ' + error.message);
        }
    }

    async update(id, newData) {
        try {
            const ph = await Ph.findByPk(id);
            if (!ph) {
                throw new Error('pH reading not found');
            }
            await ph.update(newData);
        } catch (error) {
            throw new Error('Error updating pH reading: ' + error.message);
        }
    }

    async delete(id) {
        try {
            const ph = await Ph.findByPk(id);
            if (!ph) {
                throw new Error('pH reading not found');
            }
            await ph.destroy();
        } catch (error) {
            throw new Error('Error deleting pH reading: ' + error.message);
        }
    }
}

module.exports = PhRepository;
