class LeituraFacade {
  constructor(leituraApplication) {
    this.leituraApplication = leituraApplication;
  }

  async getAll() {
    return await this.leituraApplication.getAll();
  }

  async getById(id) {
    return await this.leituraApplication.getById(id);
  }

  async add(data) {
    return await this.leituraApplication.add(data);
  }

  async update(id, newData) {
    await this.leituraApplication.update(id, newData);
  }

  async delete(id) {
    await this.leituraApplication.delete(id);
  }
}

module.exports = LeituraFacade;
