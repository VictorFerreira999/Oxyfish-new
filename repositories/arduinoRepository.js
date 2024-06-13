const IArduinoRepository = require("../interface/iArduinoRepository");
const { Arduino } = require("../data/dbContext");

class ArduinoRepository extends IArduinoRepository {
    constructor() {
        super();
    }

    async getById(id) {
        try {
            const arduino = await Arduino.findByPk(id);
            return arduino;
        } catch (error) {
            throw new Error('Erro ao buscar Arduino por ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const arduinos = await Arduino.findAll();
            return arduinos;
        } catch (error) {
            throw new Error('Erro ao buscar todos os Arduinos: ' + error.message);
        }
    }

    async add(data) {
        try {
            const newArduino = await Arduino.create(data);
            return newArduino;
        } catch (error) {
            throw new Error('Erro ao criar novo Arduino: ' + error.message);
        }
    }

    async update(id, newData) {
        try {
            const arduino = await Arduino.findByPk(id);
            if (!arduino) {
                throw new Error('Arduino não encontrado');
            }
            await arduino.update(newData);
        } catch (error) {
            throw new Error('Erro ao atualizar Arduino: ' + error.message);
        }
    }

    async delete(id) {
        try {
            const arduino = await Arduino.findByPk(id);
            if (!arduino) {
                throw new Error('Arduino não encontrado');
            }
            await arduino.destroy();
        } catch (error) {
            throw new Error('Erro ao deletar Arduino: ' + error.message);
        }
    }
}

module.exports = ArduinoRepository;
