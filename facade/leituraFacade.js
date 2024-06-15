class LeituraFacade {
  constructor(leituraRepository) {
      this.leituraRepository = leituraRepository;
  }

  async getById(id) {
      return await this.leituraRepository.getById(id);
  }

  async getAll() {
      return await this.leituraRepository.getAll();
  }

  async add(data) {
      return await this.leituraRepository.add(data);
  }

  async update(id, newData) {
      await this.leituraRepository.update(id, newData);
  }

  async delete(id) {
      await this.leituraRepository.delete(id);
  }
}

module.exports = LeituraFacade;
