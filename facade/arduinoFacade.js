const ArduinoApplication = require('../applications/arduinoApplication');

class ArduinoFacade {
  constructor(arduinoApplication) {
    this.arduinoApplication = arduinoApplication;
  }

  async getAllDadosArduino() {
    return await this.arduinoApplication.getAll();
  }

  async getDadosArduinoById(id) {
    return await this.arduinoApplication.getById(id);
  }

  async addDadosArduino(data) {
    return await this.arduinoApplication.add(data);
  }

  async updateDadosArduino(id, newData) {
    await this.arduinoApplication.update(id, newData);
  }

  async deleteDadosArduino(id) {
    await this.arduinoApplication.delete(id);
  }
}

module.exports = ArduinoFacade;
