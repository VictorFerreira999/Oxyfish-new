class PeixeFacade {
  constructor(peixeApplication) {
    this.peixeApplication = peixeApplication;
  }

  async getAllPeixes() {
    return await this.peixeApplication.getAll();
  }

  async getPeixeById(id) {
    return await this.peixeApplication.getById(id);
  }

  async addPeixe(data) {
    return await this.peixeApplication.add(data);
  }

  async updatePeixe(id, newData) {
    await this.peixeApplication.update(id, newData);
  }

  async deletePeixe(id) {
    await this.peixeApplication.delete(id);
  }
}

module.exports = PeixeFacade;
