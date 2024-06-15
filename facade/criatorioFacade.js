class CriatorioFacade {
  constructor(criatorioRepository) {
      this.criatorioRepository = criatorioRepository;
  }

  async getById(id) {
      return await this.criatorioRepository.getById(id);
  }

  async getAll() {
      return await this.criatorioRepository.getAll();
  }

  async add(data) {
      return await this.criatorioRepository.add(data);
  }

  async update(id, newData) {
      await this.criatorioRepository.update(id, newData);
  }

  async delete(id) {
      await this.criatorioRepository.delete(id);
  }
}

module.exports = CriatorioFacade;
