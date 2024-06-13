class PeixeFacade {
  constructor(peixeApplication) {
    this.peixeApplication = peixeApplication;
  }

  async getAll() {
    return await this.peixeApplication.getAll();
  }

  async getById(id) {
    return await this.peixeApplication.getById(id);
  }

  async add(data) {
    return await this.peixeApplication.add(data);
  }

  async update(id, newData) {
    await this.peixeApplication.update(id, newData);
  }

  async delete(id) {
    await this.peixeApplication.delete(id);
  }
}

module.exports = PeixeFacade;
