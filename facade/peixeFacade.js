class PeixeFacade {
  constructor(peixeRepository) {
      this.peixeRepository = peixeRepository;
  }

  async getById(id) {
      return await this.peixeRepository.getById(id);
  }

  async getAll() {
      return await this.peixeRepository.getAll();
  }

  async add(data) {
      return await this.peixeRepository.add(data);
  }

  async update(id, newData) {
      await this.peixeRepository.update(id, newData);
  }

  async delete(id) {
      await this.peixeRepository.delete(id);
  }
}

module.exports = PeixeFacade;
