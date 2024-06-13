class CriatorioFacade {
  constructor(criatorioApplication) {
    this.criatorioApplication = criatorioApplication;
  }

  async get() {
    return await this.criatorioApplication.getAll();
  }

  async getById(id) {
    return await this.criatorioApplication.getById(id);
  }

  async add(data) {
    return await this.criatorioApplication.add(data);
  }

  async update(id, newData) {
    await this.criatorioApplication.update(id, newData);
  }

  async delete(id) {
    await this.criatorioApplication.delete(id);
  }
}

module.exports = CriatorioFacade;
