const LeituraApplication = require('../applications/leituraApplication');

class LeituraFacade {
  constructor(leituraApplication) {
    this.leituraApplication = leituraApplication;
  }

  async getAllLeituras() {
    return await this.leituraApplication.getAll();
  }

  async getLeituraById(id) {
    return await this.leituraApplication.getById(id);
  }

  async addLeitura(data) {
    return await this.leituraApplication.add(data);
  }

  async updateLeitura(id, newData) {
    await this.leituraApplication.update(id, newData);
  }

  async deleteLeitura(id) {
    await this.leituraApplication.delete(id);
  }
}

module.exports = LeituraFacade;
