class ArduinoFacade {
  constructor(arduinoApplication) {
    this.arduinoApplication = arduinoApplication;
  }

  async getAll() {
    return await this.arduinoApplication.getAll();
  }

  async getById(id) {
    return await this.arduinoApplication.getById(id);
  }

  async add(data) {
    return await this.arduinoApplication.add(data);
  }

  async update(id, newData) {
    await this.arduinoApplication.update(id, newData);
  }

  async delete(id) {
    await this.arduinoApplication.delete(id);
  }
}

module.exports = ArduinoFacade;
