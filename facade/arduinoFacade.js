class ArduinoFacade {
    constructor(arduinoApplication) {
        this.arduinoApplication = arduinoApplication;
    }

    async add(data) {
        try {
            const novoArduino = await this.arduinoApplication.add(data);
            return novoArduino;
        } catch (error) {
            throw new Error('Erro ao adicionar Arduino: ' + error.message);
        }
    }

    async getById(id) {
        try {
            const arduino = await this.arduinoApplication.getById(id);
            return arduino;
        } catch (error) {
            throw new Error('Erro ao obter Arduino por ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const arduinos = await this.arduinoApplication.getAll();
            return arduinos;
        } catch (error) {
            throw new Error('Erro ao obter todos os Arduinos: ' + error.message);
        }
    }

    async update(id, newData) {
        try {
            await this.arduinoApplication.update(id, newData);
        } catch (error) {
            throw new Error('Erro ao atualizar Arduino: ' + error.message);
        }
    }

    async delete(id) {
        try {
            await this.arduinoApplication.delete(id);
        } catch (error) {
            throw new Error('Erro ao deletar Arduino: ' + error.message);
        }
    }
}

module.exports = ArduinoFacade;
