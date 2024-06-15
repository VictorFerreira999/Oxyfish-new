class ArduinoFacade {
  constructor(arduinoRepository) {
      this.arduinoRepository = arduinoRepository;
  }

  async getById(id) {
      return await this.arduinoRepository.getById(id);
  }

  async getAll() {
      return await this.arduinoRepository.getAll();
  }

  async add(data) {
      return await this.arduinoRepository.add(data);
  }

  async update(id, newData) {
      await this.arduinoRepository.update(id, newData);
  }

  async delete(id) {
      await this.arduinoRepository.delete(id);
  }
}

module.exports = ArduinoFacade;
