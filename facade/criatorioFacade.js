const CriatorioApplication = require('../applications/criatorioApplication');

class CriatorioFacade {
  constructor(criatorioApplication) {
    this.criatorioApplication = criatorioApplication;
  }

  async getAllCriatorios() {
    return await this.criatorioApplication.getAll();
  }

  async getCriatorioById(id) {
    return await this.criatorioApplication.getById(id);
  }

  async addCriatorio(data) {
    return await this.criatorioApplication.add(data);
  }

  async updateCriatorio(id, newData) {
    await this.criatorioApplication.update(id, newData);
  }

  async deleteCriatorio(id) {
    await this.criatorioApplication.delete(id);
  }
}

module.exports = CriatorioFacade;
